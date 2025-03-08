'use client';

import { useRef } from 'react';
import { myBasicInfo, myEducation, myCoreCompetencies, myOASkills, myCareer, myLanguageSkills, myProjects, myOverseasExperiences } from '@/constants/resume-data';
import { BasicInformation } from '@/components/organism/basic-information';
import { EducationHistory } from '@/components/organism/education-history';
import { CoreCompetencies } from '@/components/organism/core-competencies';
import { Title } from '@/components/atoms/title';
import { CareerHistory } from '@/components/organism/career-history';
import { LanguageSkills } from '@/components/organism/language-skills';
import { OASkills } from '@/components/organism/oa-skills';
import { OverseasExperiences } from '@/components/organism/overseas-experience';
import { Projects } from '@/components/organism/projects';
import { PrintButton } from '@/components/atoms/print-button';

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-violet-100 to-gray-100 
                    dark:from-gray-900 dark:via-violet-950 dark:to-gray-950 
                    transition-colors duration-500">
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <Title className="text-6xl font-black bg-clip-text text-transparent 
                          bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 
                          hover:from-purple-600 hover:via-violet-600 hover:to-blue-600 
                          transition-all duration-500">
            이력서
          </Title>
          <PrintButton contentRef={contentRef as React.RefObject<HTMLDivElement>} />
        </div>

        <div id="resume-content" ref={contentRef} className="grid gap-6">
          <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                            rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                            dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                            hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                            dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                            border border-white/20 dark:border-white/10 
                            transition-all duration-300 p-8">
            <BasicInformation data={myBasicInfo} />
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                              rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                              dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                              hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                              dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                              border border-white/20 dark:border-white/10 
                              transition-all duration-300 p-8">
              <CoreCompetencies competencies={myCoreCompetencies} />
            </section>
            <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                              rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                              dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                              hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                              dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                              border border-white/20 dark:border-white/10 
                              transition-all duration-300 p-8">
              <EducationHistory educations={myEducation} />
            </section>
          </div>

          <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                              rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                              dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                              hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                              dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                              border border-white/20 dark:border-white/10 
                              transition-all duration-300 p-8">
            <LanguageSkills skills={myLanguageSkills} />
          </section>
          <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                              rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                              dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                              hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                              dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                              border border-white/20 dark:border-white/10 
                              transition-all duration-300 p-8">
            <OASkills skills={myOASkills} />
          </section>
          <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                              rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                              dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                              hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                              dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                              border border-white/20 dark:border-white/10 
                              transition-all duration-300 p-8">
            <OverseasExperiences experiences={myOverseasExperiences} />
          </section>

          <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                            rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                            dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                            hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                            dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                            border border-white/20 dark:border-white/10 
                            transition-all duration-300 p-8">
            <CareerHistory careers={myCareer} />
          </section>

          <section className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 
                            rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                            dark:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                            hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] 
                            dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.32)]
                            border border-white/20 dark:border-white/10 
                            transition-all duration-300 p-8">
            <Projects projects={myProjects} />
          </section>
        </div>
      </main>
    </div>
  );
}