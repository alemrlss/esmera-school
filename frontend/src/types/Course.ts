export default interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  image: string;
  image2: string;
  isPopular: boolean;
  offersYou: string;
  targetAudience: string;
  temary: string[];
  outputs: string[];
  relatedCourses: string[];
}
