"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useSceneController } from "@/hooks/useSceneController";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import BubbleField from "@/components/BubbleField";
import SupportWidget from "@/components/SupportWidget";
import AuthModal from "@/components/AuthModal";
import SceneShell from "@/components/SceneShell";
import HeroScene from "@/components/scenes/HeroScene";
import AboutScene from "@/components/scenes/AboutScene";
import SkillsScene from "@/components/scenes/SkillsScene";
import WorkflowScene from "@/components/scenes/WorkflowScene";
import ExperienceScene from "@/components/scenes/ExperienceScene";
import ProjectsScene from "@/components/scenes/ProjectsScene";
import AchievementsScene from "@/components/scenes/AchievementsScene";
import TestimonialsScene from "@/components/scenes/TestimonialsScene";
import ContactScene from "@/components/scenes/ContactScene";

export default function Home() {
  const { user, status, logout } = useAuth();
  const isAuthenticated = status === "authenticated";
  const { scene, direction, goTo, setLocked, setLoginPromptHandler } =
    useSceneController(isAuthenticated);

  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    setLoginPromptHandler(() => setAuthOpen(true));
  }, [setLoginPromptHandler]);

  useEffect(() => {
    setLocked(authOpen);
  }, [authOpen, setLocked]);

  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden bg-black">
      <BubbleField />

      <Header
        activeScene={scene}
        isAuthenticated={isAuthenticated}
        displayName={user?.displayName}
        onNavigate={goTo}
        onOpenLogin={() => setAuthOpen(true)}
        onLogout={logout}
      />

      <div className="relative h-full w-full">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          {scene === "hero" && (
            <SceneShell key="hero" direction={direction}>
              <HeroScene
                isAuthenticated={isAuthenticated}
                onOpenLogin={() => setAuthOpen(true)}
                onOpenSignup={() => setAuthOpen(true)}
                onExplore={() => goTo("about")}
              />
            </SceneShell>
          )}
          {scene === "about" && (
            <SceneShell key="about" direction={direction}>
              <AboutScene />
            </SceneShell>
          )}
          {scene === "skills" && (
            <SceneShell key="skills" direction={direction}>
              <SkillsScene />
            </SceneShell>
          )}
          {scene === "workflow" && (
            <SceneShell key="workflow" direction={direction}>
              <WorkflowScene />
            </SceneShell>
          )}
          {scene === "experience" && (
            <SceneShell key="experience" direction={direction}>
              <ExperienceScene />
            </SceneShell>
          )}
          {scene === "projects" && (
            <SceneShell key="projects" direction={direction}>
              <ProjectsScene />
            </SceneShell>
          )}
          {scene === "achievements" && (
            <SceneShell key="achievements" direction={direction}>
              <AchievementsScene />
            </SceneShell>
          )}
          {scene === "testimonials" && (
            <SceneShell key="testimonials" direction={direction}>
              <TestimonialsScene />
            </SceneShell>
          )}
          {scene === "contact" && (
            <SceneShell key="contact" direction={direction}>
              <ContactScene />
            </SceneShell>
          )}
        </AnimatePresence>
      </div>

      <SupportWidget />
      <CustomCursor />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </main>
  );
}
