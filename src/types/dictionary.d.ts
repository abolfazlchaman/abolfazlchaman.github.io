// types/translation.d.ts

export interface TranslationDict {
  language: string
  developerInfo: {
    fullName: string
    profession: string
    experience: string
    location: string
  }
  socialLinks: []
  theme: {
    toggle: string
    light: string
    dark: string
    system: string
  }
  navigation: {
    home: string
    about: string
    projects: string
    blog: string
    toggle_menu: string
  }
  footer: {
    quote: string
    author: string
    copyrightText: string
  }
  about: {
    title: string
    description: string
    buttonTextFa: string
    buttonTextEn: string
  }
  projects: {
    title: string
    subtitle: string
    projectsData: {
      title: string
      description: string
      link: string
      technologies: string[]
    }[]
  }
}
