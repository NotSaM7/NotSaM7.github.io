import { create } from 'zustand';
import { APPS_REGISTRY } from './fileSystem';

export interface WindowItem {
  id: string;
  appId: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
}

interface WindowManagerState {
  windows: WindowItem[];
  zCounter: number;
  activeAppTitle: string;
  isBooted: boolean;
  selectedIconId: string | null;
  desktopIconsPosition: Record<string, { x: number; y: number }>;

  // Actions
  setBooted: (booted: boolean) => void;
  selectIcon: (appId: string | null) => void;
  openWindow: (appId: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  toggleMaximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateIconPosition: (appId: string, x: number, y: number) => void;
}

export const useWindowManager = create<WindowManagerState>((set, get) => ({
  windows: [],
  zCounter: 100,
  activeAppTitle: 'Finder',
  isBooted: false,
  selectedIconId: null,
  desktopIconsPosition: {},

  setBooted: (booted) => set({ isBooted: booted }),

  selectIcon: (appId) => set({ selectedIconId: appId }),

  openWindow: (appId) => {
    const { windows, zCounter } = get();
    const appMeta = APPS_REGISTRY[appId];
    if (!appMeta) return;

    // If window already exists, restore/focus it
    const existing = windows.find((w) => w.appId === appId);
    if (existing) {
      if (existing.isMinimized) {
        get().restoreWindow(existing.id);
      } else {
        get().focusWindow(existing.id);
      }
      return;
    }

    // Determine window size making use of ~60-68% of screen
    const isClient = typeof window !== 'undefined';
    const screenW = isClient ? window.innerWidth : 1280;
    const screenH = isClient ? window.innerHeight : 800;
    const isMobile = screenW < 768;

    const w = isMobile
      ? Math.max(320, screenW - 20)
      : Math.max(680, Math.min(1240, Math.round(screenW * (appMeta.defaultWidthRatio || 0.65))));

    const h = isMobile
      ? Math.max(420, screenH - 100)
      : Math.max(480, Math.min(840, Math.round(screenH * (appMeta.defaultHeightRatio || 0.65))));

    const cascadeOffset = (windows.length % 5) * 24;
    const x = isMobile ? 10 : Math.max(20, Math.round((screenW - w) / 2) + cascadeOffset - 30);
    const y = isMobile ? 36 : Math.max(36, Math.round((screenH - h) / 2) + cascadeOffset - 20);
    const newZ = zCounter + 1;

    const newWindow: WindowItem = {
      id: `${appId}-${Date.now()}`,
      appId,
      title: appMeta.title,
      x,
      y,
      w,
      h,
      zIndex: newZ,
      isMinimized: false,
      isMaximized: false,
      isFocused: true,
    };

    set({
      windows: [...windows.map((w) => ({ ...w, isFocused: false })), newWindow],
      zCounter: newZ,
      activeAppTitle: appMeta.title,
      selectedIconId: null,
    });
  },

  closeWindow: (id) => {
    const { windows } = get();
    const filtered = windows.filter((w) => w.id !== id);
    const nextFocused = filtered.length > 0 ? filtered[filtered.length - 1] : null;

    set({
      windows: filtered.map((w) => ({
        ...w,
        isFocused: nextFocused ? w.id === nextFocused.id : false,
      })),
      activeAppTitle: nextFocused ? nextFocused.title : 'Finder',
    });
  },

  minimizeWindow: (id) => {
    const { windows } = get();
    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true, isFocused: false } : w
      ),
      activeAppTitle: 'Finder',
    });
  },

  restoreWindow: (id) => {
    const { windows, zCounter } = get();
    const newZ = zCounter + 1;
    const target = windows.find((w) => w.id === id);

    set({
      windows: windows.map((w) =>
        w.id === id
          ? { ...w, isMinimized: false, isFocused: true, zIndex: newZ }
          : { ...w, isFocused: false }
      ),
      zCounter: newZ,
      activeAppTitle: target ? target.title : 'Finder',
    });
  },

  toggleMaximizeWindow: (id) => {
    const { windows } = get();
    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    });
  },

  focusWindow: (id) => {
    const { windows, zCounter } = get();
    const target = windows.find((w) => w.id === id);
    if (!target || (target.isFocused && !target.isMinimized)) return;

    const newZ = zCounter + 1;
    set({
      windows: windows.map((w) =>
        w.id === id
          ? { ...w, isFocused: true, isMinimized: false, zIndex: newZ }
          : { ...w, isFocused: false }
      ),
      zCounter: newZ,
      activeAppTitle: target.title,
    });
  },

  updateWindowPosition: (id, x, y) => {
    const { windows } = get();
    set({
      windows: windows.map((w) => (w.id === id ? { ...w, x, y } : w)),
    });
  },

  updateIconPosition: (appId, x, y) => {
    const { desktopIconsPosition } = get();
    set({
      desktopIconsPosition: { ...desktopIconsPosition, [appId]: { x, y } },
    });
  },
}));
