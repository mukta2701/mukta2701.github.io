export const projects = [
  {
    slug: 'compliancehub',
    title: 'ComplianceHub',
    category: 'Governance',
    summary:
      'An internal compliance workspace that connects security controls, evidence, ownership, and remediation.',
    problem:
      'Compliance work was spread across separate records, making it harder for a team to track evidence, review dates, and follow-up actions.',
    contribution:
      'Developed the tool into an internal workspace for control assessments, policy accountability, audit preparation, and security follow-up.',
    scope:
      'Internal tool used at Adtecher for control assessments, policy accountability, audit preparation, and security follow-up.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'GitHub', 'Cloud monitoring'],
    status: 'Internal use',
    links: [],
  },
  {
    slug: 'privacy-review-agent',
    title: 'Privacy Review Agent',
    category: 'Privacy',
    summary:
      'An offline-first CLI that checks code changes for privacy and security risks before merge.',
    problem:
      'Secret scanners can miss personal data in logs, unapproved data transfers, and sensitive values passed into model prompts.',
    contribution:
      'Built policy-driven detectors and commit or CI checks with severity and confidence rules, reviewable exceptions, and Markdown, JSON, and SARIF reports.',
    scope:
      'Runs locally by default and scans folders, staged files, or changed files. Built-in calibration checks use included safe and unsafe fixtures.',
    technologies: ['Python', 'Click', 'PyYAML', 'GitHub Actions', 'SARIF'],
    status: 'Personal project',
    links: [
      { label: 'Source code', url: 'https://github.com/mukta2701/shiny-invention' },
    ],
  },
  {
    slug: 'cybertrend-intelligence',
    title: 'Cybertrend Intelligence',
    category: 'Threat intelligence',
    summary:
      'A Python pipeline that combines vulnerability and threat reporting into prioritised briefings.',
    problem:
      'Security teams need to weigh vulnerability severity alongside exploitation evidence to decide what deserves attention.',
    contribution:
      'Combined CVSS, EPSS, and CISA KEV data with structured AI summaries, deduplication, stored delivery records, and email alerts.',
    scope:
      'Personal pipeline with severity-grouped email briefings and critical alerts, using CVSS, EPSS, and CISA KEV data.',
    technologies: ['Python', 'CVSS', 'EPSS', 'CISA KEV', 'GenAI'],
    status: 'Personal project',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/mukta2701/cybertrend-intelligence',
      },
    ],
  },
  {
    slug: 'ai-security-testing',
    title: 'AI Security Testing',
    category: 'AI security',
    summary:
      'A repeatable adversarial test framework for a local mock AI application.',
    problem:
      'Prompt injection and unsafe tool actions need checks that can be repeated against defined guardrail behaviours.',
    contribution:
      'Created tests for direct and indirect prompt injection, jailbreaks, and tool-action hijacking, then mapped outcomes to risk and mitigation records.',
    scope:
      'Local mock application with synthetic scenarios. The checks exercise the harness and do not measure real-model effectiveness.',
    technologies: ['Python', 'Prompt injection', 'OWASP LLM risks', 'Risk registers'],
    status: 'Local mock',
    links: [
      { label: 'Source code', url: 'https://github.com/mukta2701/expert-broccoli' },
    ],
  },
  {
    slug: 'rfid-medical-device-threat-modelling',
    title: 'RFID Medical Device Threat Modelling',
    category: 'Threat modelling',
    summary:
      'A STRIDE case study of an RFID-enabled implantable medical-device ecosystem.',
    problem:
      'Spoofing, tampering, or service disruption in connected medical devices can affect patient safety and privacy.',
    contribution:
      'Mapped threats and proposed authentication, access-control, and audit safeguards for the device context.',
    scope:
      'STRIDE case study with proposed safeguards for a modelled device ecosystem.',
    technologies: ['STRIDE', 'RFID', 'Medical device security', 'Threat modelling'],
    status: 'Case study',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/mukta2701/rfid-threat-modelling-imd',
      },
    ],
  },
  {
    slug: 'ai-governance-platform',
    title: 'AI Governance Platform',
    category: 'Governance',
    summary:
      'A self-hosted demonstration workspace for AI assurance and internal readiness work.',
    problem:
      'Teams need a traceable way to connect AI system context and assessment answers to risks, controls, evidence, and remediation.',
    contribution:
      'Built a demonstration workflow around fictional organisations, people, risks, and evidence, with an assessment pinned to NIST AI RMF 1.0.',
    scope:
      'Self-hosted demonstration workspace with fictional organisations, people, risks, and evidence. Its assessment is pinned to NIST AI RMF 1.0.',
    technologies: ['NIST AI RMF', 'AI assurance', 'Risk management'],
    status: 'Demonstration',
    links: [],
  },
  {
    slug: 'claude-brain',
    title: 'Claude Brain',
    category: 'Foundations',
    summary:
      'A local Claude Code observer that records redacted activity and refreshes an Obsidian project journal.',
    problem:
      'Session activity, touched files, and project notes can be difficult to review across separate work sessions.',
    contribution:
      'Built hook capture, SQLite storage, transcript backfill, status-line metrics, health checks, and Obsidian note updates.',
    scope:
      'Local workflow that stores redacted hook data and refreshes Obsidian notes with summaries and metadata.',
    technologies: ['Python', 'SQLite', 'Claude Code hooks', 'Obsidian'],
    status: 'Local workflow',
    links: [],
  },
  {
    slug: 'aws-cloud-security-baseline',
    title: 'AWS Cloud Security Baseline',
    category: 'Foundations',
    summary:
      'A work-in-progress baseline plan for identity, encryption, secrets, network controls, and monitoring.',
    problem:
      'A small SaaS environment needs a documented starting point for reducing excessive access, exposed secrets, and weak network visibility.',
    contribution:
      'Structured planned labs and case-study material around IAM, KMS, Secrets Manager, VPC traffic, Flow Logs, and VPC endpoints.',
    scope:
      'This is a scaffold awaiting lab execution. Evidence folders contain checklists and placeholders; the controls have not been built or validated.',
    technologies: ['AWS', 'IAM', 'KMS', 'Secrets Manager', 'VPC'],
    status: 'In progress',
    links: [],
  },
  {
    slug: 'python-nltk-chatbot',
    title: 'Python and NLTK Chatbot',
    category: 'Foundations',
    summary:
      'An earlier intent-classification chatbot project using Keras and NLTK.',
    problem:
      'A conversational interface needs to classify example inputs into supported intents and return a matching response.',
    contribution:
      'Built a chatbot project around a trained intent classifier and a Python language-processing workflow.',
    scope: 'Earlier learning project covering intent classification with Keras and NLTK.',
    technologies: ['Python', 'Keras', 'NLTK'],
    status: 'Earlier project',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/mukta2701/ChatBot-using-Python-and-NLTK',
      },
    ],
  },
  {
    slug: 'secure-code-game',
    title: 'Secure Code Game',
    category: 'Foundations',
    summary:
      'An unmodified clone of the GitHub Security Lab Secure Code Game course template.',
    problem:
      'The course provides vulnerable examples for learning how to identify and fix common coding security issues.',
    contribution:
      'Kept an unmodified copy of the course template repository.',
    scope:
      'Unmodified clone of the GitHub Security Lab course template. The repository is the course starting point.',
    technologies: ['Secure coding', 'GitHub Security Lab'],
    status: 'Course clone',
    links: [
      {
        label: 'Course clone repository',
        url: 'https://github.com/mukta2701/skill-secure-code-game',
      },
    ],
  },
  {
    slug: 'programming-foundations',
    title: 'Programming Foundations',
    category: 'Foundations',
    summary:
      'A grouped archive of programming exercises and coursework across Python, Java, and web technologies.',
    problem:
      'Early coursework and practice exercises cover core programming concepts across several languages and formats.',
    contribution:
      'Collected college coursework and practice repositories as a record of programming foundations.',
    scope:
      'This entry groups related learning archives and does not imply one combined application.',
    technologies: ['Python', 'Java', 'Web technologies'],
    status: 'Coursework archive',
    links: [
      {
        label: 'Computer Programming',
        url: 'https://github.com/mukta2701/Computer-Programming',
      },
      {
        label: 'Java Programming',
        url: 'https://github.com/mukta2701/Java-Programming',
      },
      {
        label: 'Web Technologies',
        url: 'https://github.com/mukta2701/Web-Technologies',
      },
    ],
  },
  {
    slug: 'historical-academic-security-work',
    title: 'Earlier Academic Security Work',
    category: 'Foundations',
    summary:
      'An archive of earlier academic topics in electrical-grid security, DP3T privacy, PCAP analysis, RoboPost, and ICS.',
    problem:
      'These projects explored security questions in critical infrastructure, contact tracing, network traffic, and connected systems.',
    contribution:
      'The previous portfolio records these topics as academic work.',
    scope:
      'Historical academic descriptions covering electrical-grid security, DP3T, PCAP analysis, RoboPost, and ICS.',
    technologies: ['ICS security', 'DP3T', 'PCAP analysis', 'IoT security'],
    status: 'Historical work',
    links: [],
  },
]
