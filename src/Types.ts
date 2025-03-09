
export interface NavItem {
    label: string;
    href: string;
  }
  
  import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

  export interface ServiceCard {
    title: string;
    description: string;
    icon?: IconDefinition; // Use IconDefinition instead of FontAwesomeIcon
    gradient?: string;
  }
  
  
  export interface CaseStudy {
    title: string;
    description: string;
    image: string;
    backgroundColor: string;
  }
  
  export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    rating: string;
  }
  
  export interface BlogPost {
    title: string;
    image: string;
  }
  