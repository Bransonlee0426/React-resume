export interface Card {
  message?: string;
  people?: string[];
}

interface Experience {
  user_id: number;
  job_title: string;
  company_name?: string;
  content?: string;
}

export interface User {
  id: string;
  name: string;
  position?: string;
  first_name: string;
  experience?: Experience[];
  skills?: string[];
  place?: string;
  email?: string;
  phone?: string;
  profile?: string;
  education?: string;
}
