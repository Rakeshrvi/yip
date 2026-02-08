
import { SlideContent, CompetencyData, ProgressionData } from './types';

export const PITCH_SLIDES: SlideContent[] = [
  {
    id: 1,
    title: "Kerala Student Academic Indices",
    subtitle: "KSAI Framework",
    type: 'landing',
    content: [
      "Standardizing Excellence for a Knowledge-Based Economy.",
      "A Global Benchmark for Local Learning.",
      "Presented for YIP DLE 2025."
    ]
  },
  {
    id: 2,
    title: "Problem Statement",
    subtitle: "The Gap in Kerala's Excellence",
    content: [
      "Kerala's education leads nationally, yet lacks globally comparable, competency-based measurement.",
      "Reliance on marks and summative exams offers zero visibility into student progression.",
      "Absence of standardized indices restricts early intervention and global benchmarking.",
      "Traditional reporting fails to identify learning poverty until it's too late."
    ],
    facts: [
      { text: "Kerala ranks #1 in NITI Aayog's SEQI with 82.2 points, highlighting systemic maturity.", source: "NITI Aayog (2019)" },
      { text: "ASER 2023 shows while enrollment is 99%, functional grade-level competence lags behind international counterparts.", source: "ASER National Report" }
    ]
  },
  {
    id: 3,
    title: "Vision & Strategy",
    subtitle: "A Global Learning Standard for Kerala",
    content: [
      "Standardization: Mapping Kerala learning outcomes to PISA, TIMSS, and UNESCO Proficiency Frameworks.",
      "Real-time Tracking: Converting raw classroom scores into dynamic Standardized Academic Indices (SAI).",
      "Innovation: Shifting the paradigm from 'One-time summative marks' to continuous mastery tracking.",
      "Evidence-Based: Enabling global comparability without requiring complex syllabus overhauls."
    ],
    kpis: [
      { label: "State Enrollment", value: "99%", sub: "Primary-Secondary" },
      { label: "NITI SEQI Rank", value: "#1", sub: "National Leader" },
      { label: "Target Coverage", value: "12k+", sub: "Public Schools" },
      { label: "Target Mastery", value: "Level 3+", sub: "PISA Standards" }
    ]
  },
  {
    id: 4,
    title: "Product / Cause / Innovation",
    subtitle: "Category: Product + Social Impact",
    content: [
      "A digital academic measurement system promoting equity and evidence-based decision making.",
      "Supports policy innovation by linking school assessments to national learning standards.",
      "Bridging the gap between 'High Literacy' and 'High Competency'.",
      "Alignment with Kerala's mission for knowledge-based economy transformation."
    ]
  },
  {
    id: 5,
    title: "Product Classification",
    subtitle: "Student Learning Index Platform",
    content: [
      "Aggregates scholastic, formative, and qualitative competency data.",
      "Core: An automated engine converting scores into Global Proficiency Indices.",
      "Platform: Functions as a critical decision-support system for Teachers and Policymakers.",
      "Output: Mapped learning outcomes linked to National (PARAKH) and Global benchmarks."
    ]
  },
  {
    id: 6,
    title: "Beneficiary Analysis",
    subtitle: "Multi-Stakeholder Impact Mapping",
    type: 'diagram',
    content: [
      "Students: Receive clear growth pathways and personalized progression charts.",
      "Teachers: Gain targeted intervention insights to address specific skill gaps.",
      "Schools: Data-driven performance benchmarking for annual quality improvement.",
      "State: Evidence-based dashboard for strategic educational resource allocation."
    ]
  },
  {
    id: 7,
    title: "Unique Value Proposition",
    subtitle: "Beyond Traditional Marksheets",
    content: [
      "Measures 'Applied Capability' (what students can do) vs 'Recall Capacity' (what students score).",
      "Tracks longitudinal learning growth over entire schooling cycles.",
      "Scalable infrastructure that works with current school management systems.",
      "Global benchmarking made possible via advanced statistical mapping algorithms."
    ]
  },
  {
    id: 8,
    title: "Innovation: Novelty",
    subtitle: "Transitioning to Academic Indices",
    content: [
      "Replaces static scores with dynamic 'Indices' (Literacy, Numeracy, Problem Solving).",
      "Integrates engagement indicators and competency mastery tracking.",
      "First-of-its-kind policy-linking methodology for State-level assessments.",
      "Standardizes fragmented assessment data into a unified proficiency scale."
    ],
    facts: [
      { text: "UNESCO GPF allows countries to map local assessments to global standards, yet Kerala lacks an automated pipeline.", source: "UNESCO GAML" }
    ]
  },
  {
    id: 9,
    title: "Appropriateness & Feasibility",
    subtitle: "NEP 2020 & Kerala Infrastructure",
    content: [
      "Direct Alignment: Supports NEP 2020's mandate for 'competency-based' assessments.",
      "Infrastructure: Leverages Kerala's KITE/Samagra and IT@School ecosystems.",
      "Feasibility: Uses existing marks data — requires no additional testing load on students.",
      "Adaptability: Works across Government, Aided, and Public school systems."
    ]
  },
  {
    id: 10,
    title: "Voice of Stakeholder",
    subtitle: "Insights from the Ground",
    content: [
      "Teachers: 'We record scores but don't know the exact competency gap of each child.'",
      "Administrators: 'We need to know how our school compares to global standards, not just neighbors.'",
      "Engagement: Preliminary studies conducted via teacher focus groups and assessment review."
    ]
  },
  {
    id: 11,
    title: "Competitive Landscape",
    subtitle: "Defining the KSAI Edge",
    type: 'comparison',
    content: [
      "Report Cards: Micro-level, but purely marks-based and backward-looking.",
      "NAS / PARAKH: Macro-level national samples, not useful for individual school intervention.",
      "KSAI: The only system offering Micro-level tracking with Global Alignment and Growth mapping."
    ]
  },
  {
    id: 12,
    title: "Product Showcase: Features I",
    subtitle: "Student Competency Profile",
    type: 'prototype',
    content: [
      "Radar Mapping: Holistic view of core competencies (Math, Reading, Science).",
      "Proficiency Levels: Visual indicators mapping students to PISA Level 1-6.",
      "Gap Alert: Automatic identification of critical skill deficits."
    ]
  },
  {
    id: 13,
    title: "Product Showcase: Features II",
    subtitle: "Learning Progression Dashboard",
    type: 'prototype',
    content: [
      "Growth Timeline: Visualizing mastery progression across semesters.",
      "Predictive Analytics: AI-driven forecasting of end-of-year proficiency targets.",
      "Intervention Logic: Suggested activities linked to SCERT and NCERT resource banks."
    ]
  },
  {
    id: 14,
    title: "App Logic & Tech Engine",
    subtitle: "The KSAI Architecture",
    type: 'logic',
    content: [
      "Data Input Layer: Secure API integration with Samagra/KITE databases.",
      "Indexing Engine: Statistical normalization of raw assessment scores.",
      "Policy Linkage: Mapping normalized scores to Global Proficiency descriptors.",
      "Output Layer: Role-based dashboards for Teachers, Schools, and State Officials."
    ]
  },
  {
    id: 15,
    title: "Path to Success",
    subtitle: "Implementation & Impact",
    content: [
      "Curriculum Alignment: Verified with SCERT Kerala learning outcomes.",
      "Usability: Minimal dashboard overhead for teachers already using Samagra.",
      "Social Impact: Reducing dropout rates by identifying learning plateaus early.",
      "State Goal: Positioning Kerala as a global pioneer in educational data science."
    ]
  },
  {
    id: 16,
    title: "Schedule & Investment",
    subtitle: "4-Phase Execution Roadmap",
    content: [
      "Phase 1 (Months 1-3): Concept refinement, index definition, and pilot design.",
      "Phase 2 (Months 4-6): Prototype dev, index engine build, and API testing.",
      "Phase 3 (Months 7-10): School pilot, feedback collection, and logic refinement.",
      "Phase 4 (Month 11+): Statewide scale-up and policy integration."
    ]
  },
  {
    id: 17,
    title: "Team & Final Vision",
    subtitle: "Kerala as a Global Benchmark",
    content: [
      "Team Strength: Deep expertise in educational research, data science, and public policy.",
      "Long-term Value: Creation of a 'Kerala Model' for digital academic measurement.",
      "Sustainability: Built to evolve with changing global assessment frameworks.",
      "Final Call: Transforming how we measure learning, to transform how we learn."
    ]
  }
];

export const MOCK_COMPETENCY: CompetencyData[] = [
  { subject: 'Reading Literacy', score: 78, stateAvg: 65, globalBenchmark: 80, fullMark: 100 },
  { subject: 'Math Proficiency', score: 62, stateAvg: 58, globalBenchmark: 75, fullMark: 100 },
  { subject: 'Scientific Inquiry', score: 85, stateAvg: 70, globalBenchmark: 78, fullMark: 100 },
  { subject: 'Problem Solving', score: 70, stateAvg: 62, globalBenchmark: 82, fullMark: 100 },
  { subject: 'Critical Thinking', score: 55, stateAvg: 50, globalBenchmark: 70, fullMark: 100 },
];

export const MOCK_PROGRESSION: ProgressionData[] = [
  { month: 'Jun', score: 45, growth: 0 },
  { month: 'Jul', score: 48, growth: 3 },
  { month: 'Aug', score: 52, growth: 4 },
  { month: 'Sep', score: 60, growth: 8 },
  { month: 'Oct', score: 58, growth: -2 },
  { month: 'Nov', score: 65, growth: 7 },
  { month: 'Dec', score: 72, growth: 7 },
];
