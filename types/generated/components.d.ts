import type { Struct, Schema } from '@strapi/strapi';

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'rocket';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'briefcase';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String & Schema.Attribute.Required;
    endDate: Schema.Attribute.String;
    workSummary: Schema.Attribute.Blocks;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Schema.Attribute.String & Schema.Attribute.Required;
    degree: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'degree'>;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String & Schema.Attribute.Required;
    endDate: Schema.Attribute.String;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'description'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'skills.skills': SkillsSkills;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
