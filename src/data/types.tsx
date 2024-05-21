import React from "react";

export type SocialLink = {
  name: string;
  url: string;
  icon: any; // Replace 'any' with the actual type of your icons if available
};

export type Contact = {
  email: string;
  tel: string;
  social: SocialLink[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type Work = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: any; // Replace 'any' with the actual type of your logos if available
  start: string;
  end: string;
  summary?: string;
  techStack?: string[];
  bullets?: string[];
};

export type Certification = {
  name: string;
  certificateLink: string;
  issuedBy?: string;
  issued: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo?: React.FC; // Replace 'any' with the actual type of your logos if available
  link?: ProjectLink;
};

export type ResumeData = {
  readonly name: string;
  readonly initials: string;
  readonly location: string;
  readonly locationLink: string;
  readonly about: string;
  readonly summary: string;
  readonly avatarUrl: string;
  readonly personalWebsiteUrl: string;
  readonly contact: Contact;
  readonly education: Education[];
  readonly work: Work[];
  readonly skills: {
    readonly [key: string]: string[];
  };
  readonly certifications: Certification[];
  readonly projects: Project[];
};