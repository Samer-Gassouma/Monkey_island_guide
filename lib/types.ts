export interface Section {
  title: string
  content: string
}

export interface Chapter {
  id: string
  title: string
  sections: Section[]
}

export interface Location {
  id: string
  name: string
  description: string
  image: string
  items: string[]
  characters: string[]
}

export interface Item {
  id: string
  name: string
  description: string
  image: string
  location: string
  usage: string
}

export interface Puzzle {
  id: string
  title: string
  description: string
  location: string
  solution: string
  items: string[]
}