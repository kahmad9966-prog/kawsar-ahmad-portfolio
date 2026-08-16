export const SCENES = [
  "hero",
  "about",
  "skills",
  "workflow",
  "experience",
  "projects",
  "achievements",
  "testimonials",
  "contact",
] as const;

export type SceneId = (typeof SCENES)[number];

// Scenes reachable only after authentication.
export const LOCKED_SCENES: SceneId[] = [
  "about",
  "skills",
  "workflow",
  "experience",
  "projects",
  "achievements",
  "testimonials",
  "contact",
];

export const sceneIndex = (id: SceneId) => SCENES.indexOf(id);
