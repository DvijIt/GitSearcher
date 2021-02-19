export interface UserInterface {
  id: number;
  node_id: string;
  login: string;
  avatar_url: string;
  starred_url: string;
  email?: string;
  location: string;
  created_at: string;
  followers: number;
  following: number;
  name: string;
}

export interface RepoInterface {
  id: string;
  name: string;
  html_url: string;
  forks: number;
  stargazers_count: number;
}
