/**
 * @file proxy.ts
 * @description Gestão de proxy e roteamento para NextJS 16+.
 * Substitui a necessidade de middleware.ts para interceptação de requisições.
 */

export interface ProxyConfig {
  path: string;
  target: string;
  changeOrigin?: boolean;
}

export const defineProxy = (configs: ProxyConfig[]) => {
  return configs.map(config => ({
    ...config,
    changeOrigin: config.changeOrigin ?? true,
  }));
};