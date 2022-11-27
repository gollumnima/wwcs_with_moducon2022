import { ColorConfigProps, Paths } from '../types/base';

export const COLOR_CONFIG = {
  primary: {
    bg: 'bg-primary',
    text: 'text-primary-content',
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-secondary-content',
  },
  accent: {
    bg: 'bg-accent',
    text: 'text-accent-content',
  },
  info: {
    bg: 'bg-info',
    text: 'text-info-content',
  },
};

export const COLOR_MAP = new Map<Paths, ColorConfigProps>([
  ['/', COLOR_CONFIG.primary],
  ['/community', COLOR_CONFIG.secondary],
  ['/footprint', COLOR_CONFIG.accent],
  ['/result', COLOR_CONFIG.info]]);
