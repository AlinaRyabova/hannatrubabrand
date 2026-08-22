export interface Dictionary {
  nav: {
    home: string;
    about: string;
    expertise: string;
    services: string;
    research: string;
    contact: string;
    talkCta: string;
  };
  hero: {
    tag: string;
    name: string;
    titles: string[];
    concept: {
      language: string;
      research: string;
      brand: string;
    };
    description: string;
    ctaExpertise: string;
    ctaContact: string;
    badge: string;
  };
  credibilityStrip: string;
  about: {
    label: string;
    heading: string;
    text1: string;
    text2: string;
    manifesto: {
      line1: string;
      line2: string;
      line3: string;
    };
  };
  expertise: {
    label: string;
    heading: string;
    items: {
      number: string;
      title: string;
      skills: string[];
    }[];
  };
  services: {
    label: string;
    heading: string;
    cta: string;
    items: {
      badge: string;
      title: string;
      description: string;
    }[];
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    btnEmail: string;
    email: string;
    socials: {
      linkedin: { label: string; url: string };
      instagram: { label: string; url: string };
      facebook: { label: string; url: string };
    };
    form: {
      title: string;
      description: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
      errorMsg: string;
    };
    footerTag: string;
    copyright: string;
    backToTop: string;
  };
}