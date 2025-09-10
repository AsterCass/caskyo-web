export interface MainMenu {
  id: string
  code: string
  level: number
  name: string
  desc: string
  path: string
  icon: string
  children: MainMenu[]
  webIsOpen: boolean
}

export function mapToMainMenuList(data: any[]): MainMenu[] {
  if (!Array.isArray(data)) return []

  return data.map(item => ({
    id: String(item.id ?? ''),
    code: String(item.code ?? ''),
    level: Number(item.level ?? 0),
    name: String(item.name ?? ''),
    desc: String(item.desc ?? ''),
    path: String(item.path ?? ''),
    icon: String(item.icon ?? ''),
    children: Array.isArray(item.children)
      ? mapToMainMenuList(item.children) // 递归处理
      : [],
    webIsOpen: false,
  }))
}



