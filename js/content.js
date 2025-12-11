const content = {
    profile: {
        name: "Smitaj Suresh Pawar",
        title: "AI Engineer & Azure Solution Architect",
        summary: "Over 10+ years of IT experience specializing in Microsoft Azure BI, Data Solution Development, and Data Analytics. Expert in building AI solutions using Azure AI Foundry, Generative AI, and LLM models. Microsoft Certified Azure Solutions Architect Expert with a strong track record in delivering end-to-end data platforms and AI-driven applications.",
        social: {
            linkedin: "https://www.linkedin.com/in/smitaj-pawar-48a0b077",
            github: "https://github.com/SmitSPawar",
            email: "mailto:smbatu@gmail.com"
        }
    },
    hero: {
        badge: "Available for AI & Data Projects",
        headline: "Architecting Intelligent Data Solutions",
        subheadline: "I bridge the gap between complex data and actionable insights using Azure, AI, and Modern Data Warehousing."
    },
    about: {
        description: "I am an AI Engineer and Azure Solution Architect with over a decade of experience. My expertise spans across the entire data lifecycle—from ingestion and transformation to advanced analytics and AI integration. I have successfully delivered projects for global clients like Nouryon, Humana, JCI, Coca-Cola, NHS, and Capita, leveraging cutting-edge technologies like Microsoft Fabric, Azure AI Foundry, and Large Language Models.",
        stats: [
            { label: "Years Experience", value: "10+" },
            { label: "Certifications", value: "8+" },
            { label: "Happy Clients", value: "100%" }
        ]
    },
    skills: [
        {
            category: "AI & GenAI",
            items: ["Azure AI Foundry", "Generative AI", "LLM Models", "Agentic AI", "LangChain", "Cognitive Services", "TensorFlow", "Keras"]
        },
        {
            category: "Cloud & Azure",
            items: ["Azure Data Factory", "Synapse Analytics", "Azure SQL", "Databricks", "Logic Apps", "Azure Functions", "Microsoft Fabric"]
        },
        {
            category: "Data Engineering",
            items: ["SQL Server", "SSIS/SSRS/SSAS", "Data Warehousing", "ETL/ELT", "Python", "Pyspark", "T-SQL"]
        },
        {
            category: "Tools & DevOps",
            items: ["Power BI", "Azure DevOps", "Git", "Docker", "Terraform", "Alteryx", "Tableau", "ELK Stack"]
        }
    ],
    experience: [
        {
            role: "AI Engineer / Azure Solution Architect",
            company: "Nouryon",
            period: "Sep 2023 - Present",
            description: "Designing end-to-end data solutions on Nouryon Data Analytics Platform. Building Fabric AI agents for NLP chatbots and migrating platforms to Microsoft Fabric. Implementing CI/CD pipelines."
        },
        {
            role: "AI Engineer / Azure Data Engineer / Google Data Engineer",
            company: "Atos-Syntel (Client: Humana)",
            period: "May 2022 - Sep 2023",
            description: "Designed data platform solutions for Enterprise Feedback Loop (EFL). Migrated applications to Azure, processed customer feedback data using GCP and Azure services, and implemented CI/CD."
        },
        {
            role: "Azure Data Engineer",
            company: "LTI (Client: JCI)",
            period: "Mar 2021 - May 2022",
            description: "Migrated on-prem DWH to Azure Cloud. Built end-to-end data platform solutions using Azure Data Factory, Hive, and Power BI for business insights."
        },
        {
            role: "Azure Data Engineer",
            company: "CitiusTech (Client: Evicore Healthcare)",
            period: "Jan 2020 - Mar 2021",
            description: "Cloud-based analytics project for BI data transformation. Designed pipelines for multi-source data movement using Azure Data Factory and Databricks."
        },
        {
            role: "Azure Data Engineer",
            company: "Mastek Ltd (Client: Coca-Cola)",
            period: "Oct 2018 - Jan 2020",
            description: "Worked on Modern Business Data Analytics. Developed cloud solutions using Azure Data Factory, Databricks, and Data Lake. Built automation frameworks in Alteryx."
        },
        {
            role: "Azure Data Engineer",
            company: "Mastek Ltd (Client: NHS - GIRFT)",
            period: "July 2017 - Sep 2018",
            description: "Developed data transformation solutions using Azure Data Factory and SSIS. Implemented frameworks for loading complex data into Datamarts."
        },
        {
            role: "Azure Data Engineer / BI Developer",
            company: "Mastek Ltd (Client: NHS - Model Hospital)",
            period: "Dec 2016 - July 2017",
            description: "Developed end-to-end database solutions for the HES Browser Project. Worked with Analytical Platform Systems (APS), SSIS, and Alteryx for data transformation."
        },
        {
            role: "Senior BI Developer",
            company: "Mastek Ltd (Internal: IIS Logs)",
            period: "Aug 2016 - Dec 2016",
            description: "Analyzed real-time internet bandwidth using the ELK stack (Elasticsearch, Logstash, Kibana). Created dashboards in Kibana and Power BI."
        },
        {
            role: "Senior BI Developer",
            company: "Mastek Ltd (Client: Capita)",
            period: "Jun 2014 - Aug 2016",
            description: "Led data migration for the CAPITA-ONE application. Performed mapping analysis, database design, and developed SSIS packages for ETL processes."
        }
    ],
    projects: [
        {
            title: "Nouryon Data Analytics Platform",
            description: "Nouryon Data Analytics Platform is a metadata-driven platform designed to build end-to-end data solutions, from raw data sources to an enriched data warehouse, making data easily accessible for self-service BI users and sales teams to create Power BI reports. The entire platform is built using Azure services such as Azure Data Factory, Azure SQL Database, and Power BI. Currently, more than 12 data sources are integrated into the platform including SAP, ServiceNow, API etc. In parallel, the platform is being migrated to Microsoft Fabric workspace to leverage the benefits of Direct Lake for real-time refresh. Also created Fabric AI agents on top of enriched data to business users to interact with data using natural language (NLP).",
            tags: ["Azure Fabric", "AI Agents", "Power BI"],
            responsibilities: [
                "Designed High level solution design as per standard practice.",
                "Designed Fabric pipelines, spark notebooks to ingest and transform data using standard stored procedures.",
                "Designed Fabric AI agents to build NLP chatbot for business users.",
                "Designed AI knowledge base for unstructured and structured data using azure AI vector search.",
                "Deployment using Azure DevOps pipeline with CI-CD approach."
            ],
            link: "#"
        },
        {
            title: "Enterprise Feedback Loop (Humana)",
            description: "Humana is health insurance solution provider in US. We are designing data platform solutions to accept customer feedback data in the form of call recording, Chats, survey, agents from various sources building customer insight from them. Few applications are designed on GCP cloud and some of them migrated to Microsoft azure. Data processed by EFL is helping client to understand customer feedback and continues improvement in policy.",
            tags: ["GCP", "Azure Synapse", "NLP"],
            responsibilities: [
                "Understand business requirements from client and analyze the data and key metrics.",
                "Designed High-level and low-level design for the solution.",
                "Designed GCP function and pub-sub message, GCP storage Bucket to process data.",
                "Create GCP Big query tables, Stored procedure, views to process the data.",
                "Create Azure function to process the daily file and stored in azure data lake.",
                "Data modeling, transformation and loading using Azure synapse analytics with dedicated SQL pool."
            ],
            link: "#"
        },
        {
            title: "JCI Data Analytics",
            description: "Johnson controls International (JCI) is American company which produces fire, HVAC, and security equipment for buildings. In the project, we are migrating on prem DWH and reporting solution to azure cloud platform using different azure services like data factory, azure hive, power bi, data lake etc. Building end to end data platform solution which helping to the client for business decisions and Data insights from various sources.",
            tags: ["Azure Hive", "ADF", "Power BI"],
            responsibilities: [
                "Understand business requirement from client and analyze the data and key metrics.",
                "Data ingestion from multiple sources like sap, SQL server, csv, txt etc.",
                "Transforming data using azure hive with help of ADF and converting existing Talend jobs into ADF.",
                "Building DWH in azure hive database storage.",
                "Designed tabular model in azure analysis model (AAS).",
                "Power BI reports development & refresh."
            ],
            link: "#"
        },
        {
            title: "Evicore Data Analytics",
            description: "Evicore is a company committed to advancing healthcare management through intelligent care and enabling better outcomes for patients, providers, and health plans. Their evidence-based approach that leverages our exceptional capabilities, powerful analytics. This is cloud-based analytics project for BI data transformation & report building.",
            tags: ["Azure Databricks", "ADF", "Data Lake"],
            responsibilities: [
                "Cloud development using SSIS, Azure data factory, Blob Storage, Data Bricks, Azure Data Lake Store, Azure DWH, Polybase etc.",
                "Designed Data factory pipelines for multisource data movement.",
                "Data Transformation using Data bricks & Data Lake.",
                "Involved in ADF pipelines development for multiple sources.",
                "Developed Talend jobs for data transformation.",
                "Designed tabular model in azure analysis model (AAS)."
            ],
            link: "#"
        },
        {
            title: "Coca-Cola Business Analytics",
            description: "Coca cola business analytics is related to CCEP internal & Nielsen data integration and analysis of profit, price & cash tool which help CCEP to identify retailer profit, loss, sales & price merging & risk scenario etc.",
            tags: ["Azure Databricks", "Alteryx", "Power BI"],
            responsibilities: [
                "Worked as data engineer on client location (London UK) in initial phase for 1 year.",
                "Cloud development using Azure data factory, Blob Storage, Data Bricks, Azure Data Lake Store etc.",
                "Data Transformation using Data bricks & Azure data factory & Datalake U-SQL.",
                "Alteryx flow development to extract data from SAP BW, databricks and other source systems.",
                "Involved in Alteryx workflow design & publish activity on server."
            ],
            link: "#"
        },
        {
            title: "GIRFT - NHS Improvement",
            description: "Initiation of GIRFT project was to understand the current landscape within SIP and the capabilities required in the form of data and tooling to create a single source for a specialty that could be used across the Program in order to perform proactive analysis and reporting.",
            tags: ["Azure Blob", "SSIS", "Tableau"],
            responsibilities: [
                "Involved to identify GIRFT requirement & development strategy.",
                "Involved in design, development, testing and code review.",
                "Cloud development & data transformation using Azure data factory, Blob Storage.",
                "Developed SSIS packages for data transformation.",
                "Implemented framework using SQL Procedures to load the data into Datamart which have complex calculations."
            ],
            link: "#"
        },
        {
            title: "Model Hospital - NHS",
            description: "The HES Browser Project is to deliver a data analysis tool for the Cooperation and Competition Directorate (CCD) Economists. This tool is expected to replace the Dr Foster proprietary application that is currently being used by CCD.",
            tags: ["APS", "Alteryx", "SSIS"],
            responsibilities: [
                "Worked on Analytical Platform systems (APS) with MSBI stack and Alteryx (MPP architecture).",
                "Responsibility of developing the end-to-end database solution which would be consumed by Front end reporting tool.",
                "Worked on BIML script through MIST framework which provides generic and automated solution for the SSIS packages.",
                "Worked on Alteryx for data transformation.",
                "Implemented framework using SQL Procedures to load the data into Datamart which have complex calculations."
            ],
            link: "#"
        },
        {
            title: "IIS Logs Data Analytics",
            description: "It was internal Mastek project to analyze internet bandwidth in real time. The ELK platform is a complete log analytics solution, built on a combination of three open-source tools—Elasticsearch, Logstash, and Kibana.",
            tags: ["ELK Stack", "NodeJS", "Power BI"],
            responsibilities: [
                "Configure the Elasticsearch, Kibana, Logstash.",
                "Create dimension model for IIS system.",
                "Creating SSIS package to load all Staging, Dimension and facts tables.",
                "Creating SSAS cubes and import into Power BI reporting tool.",
                "Creating dashboard on Kibana visualization tool which is near real time."
            ],
            link: "#"
        },
        {
            title: "Capita Data Migration",
            description: "Capita is UK's leading provider of business process outsourcing and integrated professional support service solutions. As part of education services offering, capita has an application called CAPITA-ONE, which is a database used within Local Education Authorities (LEA) for general analysis and overview of pupil and school data. LEAs store school data in their local data bases, files etc. this data from different sources has to be migrated to CAPITA-ONE system for analysis. MDM (Migration Data Model) is an intermediate storage area used for data processing during the transformation of data from LEA Source to CAPITA-ONE.",
            tags: ["SQL Server", "SSIS", "SSRS"],
            responsibilities: [
                "Performed the mapping analysis with source and destination.",
                "Map the existing application fields with Capita ONE.",
                "Involved in Database design.",
                "Developing Schema, Stored procedures, Functions and SSIS packages using Microsoft SQL Server 2012.",
                "Created different reports using power pivot, power view and SSRS."
            ],
            link: "#"
        }
    ],
    contact: {
        title: "Let's Build the Future",
        description: "Looking for an expert in AI and Azure Data Solutions? Reach out to discuss how we can drive innovation together. Call me at +91 9028570301.",
        phone: "+91 9028570301",
        email: "smbatu@gmail.com"
    }
};
