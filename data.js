/*
 * EOSC-ES · Estado de desarrollo / Development status
 * ---------------------------------------------------
 * ESTE ES EL ÚNICO FICHERO QUE HAY QUE EDITAR PARA ACTUALIZAR LA PÁGINA.
 * THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE PAGE.
 *
 * Estados válidos / valid status values:
 *   "done"      completado / completed
 *   "progress"  en curso / in progress
 *   "review"    en revisión / under review
 *   "planned"   planificado / planned
 *   "pending"   pendiente de decisión / decision pending
 *
 * Textos bilingües: { es: "...", en: "..." }. Si un texto es igual en ambos
 * idiomas puede ser una cadena simple.
 */
window.EOSC_ES_STATUS = {
  meta: {
    updated: "2026-11-03",
    project: "EOSC-ES-Prep",
    grant: "25-EOSC-GRV-PREP-010",
    coordinator: "IACS (Instituto Aragonés de Ciencias de la Salud)",
    institutions: 22,
    contact: "",            // p. ej. "eosc-es@iacs.es" (vacío = no se muestra)
    repo: "https://github.com/eosc-es/website"   // URL del repositorio (vacío = no se muestra)
  },

  /* Fases del camino hacia Nodo de la Federación. current: índice (0..n-1) */
  phases: {
    current: 1,
    items: [
      { es: "Proyecto preparatorio (EOSC Gravity)", en: "Preparatory project (EOSC Gravity)", when: { es: "may 2026 –", en: "May 2026 –" } },
      { es: "Project Charter y gobernanza", en: "Project Charter and governance", when: { es: "sep 2026 – inicio 2027", en: "Sep 2026 – early 2027" } },
      { es: "Solicitud de enrolment (3.ª ola)", en: "Enrolment application (3rd wave)", when: "2027" },
      { es: "Build-up del Nodo", en: "Node build-up", when: { es: "desde mediados de 2027 · M1 – M24", en: "from mid-2027 · M1 – M24" } },
      { es: "Nodo de la Federación EOSC", en: "EOSC Federation Node", when: "" }
    ]
  },

  /* Entregables del proyecto preparatorio. pdf: ruta en docs/ (opcional) */
  deliverables: [
    { id: "D1", title: { es: "Plan de proyecto", en: "Project Plan" }, status: "done", pdf: "docs/D1_Project_Plan_EOSC-ES-Prep_v2.pdf", pdfLabel: "PDF v2",
      note: { es: "Entregado; versión revisada (v2) reenviada.", en: "Submitted; revised version (v2) re-submitted." } },
    { id: "D2", title: { es: "Project Charter del Nodo", en: "Node Project Charter" }, status: "done", due: "M5 · 09/2026", pdf: "docs/D2_Project_Charter_EOSC-ES-Prep_R1.pdf", pdfLabel: "PDF R1",
      note: { es: "Aprobado con recomendaciones; versión R1 (28/09/2026) con 5 entregables y 8 hitos del build-up.", en: "Approved with recommendations; R1 version (28/09/2026) with 5 build-up deliverables and 8 milestones." } },
    { id: "D3", title: { es: "Plan y presentación del showcase event", en: "Showcase event plan and presentation" }, status: "done", pdf: "docs/D3_Showcase_Event_Plan_EOSC-ES-Prep_R1.pdf", pdfLabel: "PDF R1",
      note: { es: "Versión R1 (28/09/2026). Caso de uso ejemplar del showcase elegido por votación de las instituciones: ES-UC1.", en: "R1 version (28/09/2026). Exemplary use case of the showcase chosen by a vote of the institutions: ES-UC1." } },
    { id: "D4", title: { es: "Matriz EOSC Academy", en: "EOSC Academy Matrix" }, status: "progress",
      note: { es: "Borrador v0.1 (20/10/2026).", en: "Draft v0.1 (20/10/2026)." } },
    { id: "D5", title: { es: "Informe de casos de uso", en: "Use Case Report" }, status: "progress",
      note: { es: "Borradores v0.1 de los cuatro casos de uso.", en: "Draft v0.1 of the four use cases." } }
  ],

  /* Hitos y eventos del proyecto preparatorio (orden cronológico) */
  events: [
    { date: "2026-05-08", status: "done", title: { es: "Reunión de lanzamiento (online)", en: "Kick-off meeting (online)" } },
    { date: "2026-06-29", status: "done", title: { es: "Primera reunión presencial, CSIC Madrid, con observadores de los Nodos alemán (NFDI) y checo (EOSC-CZ)", en: "First in-person meeting, CSIC Madrid, with observers from the German (NFDI) and Czech (EOSC-CZ) Nodes" } },
    { date: "2026-07-23", status: "done", title: { es: "Reunión online del consorcio", en: "Online consortium meeting" } },
    { date: "2026-09", status: "done", title: { es: "Project Charter (D2) entregado", en: "Project Charter (D2) submitted" } },
    { date: "2026-09-28", status: "done", title: { es: "Versiones R1 del Project Charter (D2) y del plan del showcase (D3)", en: "R1 versions of the Project Charter (D2) and the showcase plan (D3)" } },
    { date: "2026-10-02", status: "done", title: { es: "Encuentro tripartito EOSC España en Zaragoza, con EOSC-A, la Comisión Europea y la delegada española en el EOSC Steering Board: gobernanza en tres pasos (MoU ligero, anexo técnico en la propuesta de nodo, acuerdo tipo JRU) y AAI como proxy de nodo sobre SIR/eduGAIN", en: "Spanish EOSC tripartite event in Zaragoza, with EOSC-A, the European Commission and the Spanish EOSC Steering Board delegate: three-step governance (light MoU, technical annex in the Node proposal, JRU-type agreement) and Node-level AAI proxy on SIR/eduGAIN" } },
    { date: "2026-10-27", status: "done", title: { es: "Votación del caso de uso ejemplar entre las instituciones: elegido ES-UC1 (EHDS, One Health)", en: "Vote on the exemplary use case among the institutions: ES-UC1 (EHDS, One Health) chosen" }, link: "votacion.html" },
    { date: "2026-11-03", status: "done", title: { es: "Showcase event de las Preparatory Grants de EOSC Gravity (online): presentación del proyecto EOSC-ES-Prep (objetivos y resultados, casos de uso, lecciones aprendidas, sostenibilidad y próximos pasos). El evento fue bien; se discutió la posibilidad de buscar un espacio de discusión para los Nodos que se van a preparar", en: "EOSC Gravity Preparatory Grants showcase event (online): presentation of the EOSC-ES-Prep project (objectives and outputs, use cases, lessons learned, sustainability and next steps). The event went well; the possibility of finding a discussion space for the Nodes in preparation was discussed" }, link: "docs/D6_Showcase_Final_Presentation_EOSC_ES_Prep.pdf" },
    { date: "2026-12-08", status: "planned", title: { es: "Reunión de la Gobernanza Tripartita de EOSC en Dublín: revisión del procedimiento de selección de la 3.ª ola y de la dirección estratégica de la expansión de la Federación", en: "EOSC Tripartite Governance meeting in Dublin: review of the third-wave selection procedure and of the strategic direction of the Federation's expansion" } },
    { date: "2026-12", status: "planned", title: { es: "Apertura de la convocatoria de la 3.ª ola de enrolment de Nodos EOSC (sin financiación: cada solicitante aporta los recursos para sus compromisos). Criterios de elegibilidad, documentación y procedimiento se publicarán en eosc.eu al abrirse", en: "Third-wave EOSC Node enrolment call opens (unfunded: applicants secure the resources for their commitments). Eligibility criteria, documentation and procedure to be published on eosc.eu when it opens" }, link: "https://eosc.eu" },
    { date: "2027-01-31", status: "planned", title: { es: "Cierre de la convocatoria de la 3.ª ola: fecha límite para presentar la solicitud de enrolment de EOSC-ES", en: "Third-wave call closes: deadline to submit the EOSC-ES enrolment application" } },
    { date: "2027-03-09", status: "planned", title: { es: "Apertura de la COFUND HORIZON-INFRA-2027-01-EOSC-01 (cierre 15/06/2027)", en: "HORIZON-INFRA-2027-01-EOSC-01 COFUND opens (closes 15/06/2027)" } }
  ],

  /* Criterios de enrolment (2.ª ola; se asumen para la 3.ª) */
  enrolment: [
    { status: "done", title: { es: "Recursos con TRL > 6", en: "Resources at TRL > 6" }, note: { es: "Los 12 recursos de la cartera inicial declaran TRL ≥ 7.", en: "All 12 resources of the initial portfolio declare TRL ≥ 7." } },
    { status: "done", title: { es: "Al menos un caso de uso multi-Nodo", en: "At least one multi-Node use case" }, note: { es: "Cuatro casos, todos inter-node.", en: "Four use cases, all inter-node." } },
    { status: "done", title: { es: "Compromiso de firma del MoU de la Federación", en: "Commitment to sign the Federation MoU" }, note: { es: "Declarado en el Project Charter.", en: "Stated in the Project Charter." } },
    { status: "progress", title: { es: "Acuerdo de gobernanza del Nodo", en: "Node governance agreement" }, note: { es: "Acordado en el tripartito: MoU ligero inmediato (en redacción), anexo técnico en la propuesta de nodo y acuerdo tipo JRU tras el Framework Agreement de la Federación.", en: "Agreed at the tripartite: immediate light MoU (being drafted), technical annex in the Node proposal and a JRU-type agreement after the Federation Framework Agreement." } },
    { status: "pending", title: { es: "Entidad representante del Nodo", en: "Node representing entity" }, note: { es: "Requiere el mandato del Ministerio a una institución representante; IACS coordina de forma interina.", en: "Requires a Ministry mandate to a representing institution; IACS acts as interim coordinator." } },
    { status: "pending", title: { es: "Cinco roles nombrados (coordinación, operaciones, ciberseguridad, legal, comunicación)", en: "Five named roles (coordinator, operations, cybersecurity, legal, communications)" }, note: { es: "Todos por designar; se nombrarán antes de ES-MS0.", en: "All still TBD; to be named ahead of ES-MS0." } },
    { status: "pending", title: { es: "Endoso de la autoridad nacional competente", en: "Endorsement by the competent national authority" }, note: { es: "Vía Ministerio de Ciencia, Innovación y Universidades y COS-Gob, antes de la solicitud.", en: "Through the Ministry of Science, Innovation and Universities and COS-Gob, before the application." } }
  ],

  /* Roles obligatorios del Nodo. name vacío = por designar */
  roles: [
    { role: { es: "Coordinador/a", en: "Coordinator" }, name: "", status: "pending" },
    { role: { es: "Responsable de operaciones", en: "Operations Officer" }, name: "", status: "pending" },
    { role: { es: "Responsable de ciberseguridad", en: "Cybersecurity Officer" }, name: "", status: "pending" },
    { role: { es: "Responsable legal", en: "Legal Officer" }, name: "", status: "pending" },
    { role: { es: "Responsable de comunicación", en: "Communications Officer" }, name: "", status: "pending" }
  ],
  rolesNote: {
    es: "Todos los roles del Nodo y los responsables técnicos de cada Federating Capability están por designar. En el encuentro tripartito del 2 de octubre de 2026 se presentaron candidaturas como propuesta de trabajo, sin compromisos formales; se cerrarán antes de la solicitud de nodo, a comienzos de 2027, con titular y suplente para cada rol.",
    en: "All Node roles and the technical owners of each Federating Capability are still to be designated. Candidates were presented at the tripartite event on 2 October 2026 as a working proposal, with no formal commitments; they will be closed before the Node application in early 2027, with a holder and a deputy for each role."
  },

  /* Federating Capabilities */
  fcs: [
    { id: "FC-1", name: { es: "AAI", en: "AAI" }, level: "mandatory", status: "planned", owner: "", inst: { es: "RedIRIS (Red.es) · UPV (propuesta)", en: "RedIRIS (Red.es) · UPV (proposed)" }, target: "M6 · ES-MS2",
      basis: { es: "Proxy SSO a nivel de nodo sobre RedIRIS SIR y eduGAIN, conectado con MyAccessID (acordado el 2/10/2026).", en: "Node-level SSO proxy on RedIRIS SIR and eduGAIN, connected to MyAccessID (agreed 2/10/2026)." } },
    { id: "FC-2", name: { es: "Catálogos y registro de recursos", en: "Resource Catalogues and Registry" }, level: "mandatory", status: "planned", owner: "", inst: "RedIRIS / FECYT", target: "M6 · ES-MS2",
      basis: { es: "RECOLECTA, datos.gob.es, PLATICA (CARREDI); vía OpenAIRE.", en: "RECOLECTA, datos.gob.es, PLATICA (CARREDI); via OpenAIRE." } },
    { id: "FC-3", name: { es: "Helpdesk", en: "Helpdesk" }, level: "mandatory2026", status: "planned", owner: "", inst: "UPV / IACS / UJAEN", target: "M12 · ES-MS4",
      basis: { es: "Zammad con intercambio de tickets entre Nodos.", en: "Zammad with inter-node ticket exchange." } },
    { id: "FC-4", name: { es: "Monitorización", en: "Service Monitoring" }, level: "mandatory2026", status: "planned", owner: "", inst: { es: "CESGA · SCAYLE (propuesta)", en: "CESGA · SCAYLE (proposed)" }, target: "M12 · ES-MS4",
      basis: { es: "ARGO + exportadores Prometheus/OpenMetrics.", en: "ARGO + Prometheus/OpenMetrics exporters." } },
    { id: "FC-5", name: { es: "Sistema de gestión de servicios", en: "Service Management System" }, level: "mandatory2026", status: "planned", owner: "", inst: { es: "BSC-CNS (propuesta)", en: "BSC-CNS (proposed)" }, target: "M15 · ES-MS5",
      basis: { es: "SMS basado en FitSM.", en: "FitSM-based SMS." } },
    { id: "FC-6", name: { es: "Contabilidad de servicios", en: "Service Accounting" }, level: "recommended", status: "planned", owner: "", inst: "", target: "Build-up",
      basis: { es: "Demostrador sobre plataformas de IA e inferencia.", en: "Demonstrator on AI and inference platforms." } },
    { id: "FC-7", name: { es: "Contabilidad de productos de investigación", en: "Research Product Accounting" }, level: "recommended", status: "planned", owner: "", inst: "", target: "Build-up",
      basis: { es: "Estadísticas de uso de repositorios DSpace y RECOLECTA.", en: "Usage statistics from DSpace repositories and RECOLECTA." } },
    { id: "FC-8/9", name: { es: "Pedidos / despliegue de aplicaciones", en: "Order Management / Application Deployment" }, level: "recommended", status: "pending", owner: "", inst: "", target: { es: "No comprometido", en: "Not committed" },
      basis: { es: "Candidato: Application Workload Manager (UPV).", en: "Candidate: Application Workload Manager (UPV)." } }
  ],

  /* Aviso del showcase event (portada). show: false lo oculta */
  showcase: {
    show: true,
    date: "2026-11-03",
    time: "9:30 – 13:00 (CET)",
    title: { es: "Showcase event de las Preparatory Grants de EOSC Gravity", en: "EOSC Gravity Preparatory Grants showcase event" },
    text: {
      es: "Celebrado. El evento fue bien: EOSC-ES presentó en el segundo panel nacional el proyecto completo (objetivos y resultados, casos de uso, lecciones aprendidas, sostenibilidad y próximos pasos) y se discutieron las posibilidades de buscar un espacio de discusión para los Nodos que se van a preparar.",
      en: "Held. The event went well: EOSC-ES presented the whole project in the second national panel (objectives and outputs, use cases, lessons learned, sustainability and next steps), and the options for finding a discussion space for the Nodes in preparation were discussed."
    },
    agenda: "docs/20260608_EOSC_Gravity_Preparatory_Showcase_event_agenda.pdf",
    url: "",
    slides: "docs/D6_Showcase_Final_Presentation_EOSC_ES_Prep.pdf"
  },

  /* Votación del caso de uso ejemplar (página votacion.html) */
  vote: {
    open: false,            // true = votación abierta; false = cerrada (se muestran los resultados)
    url: "",                // URL /exec de la aplicación de Apps Script (vacía: aplicación retirada)
    closed: "2026-10-27",
    text: {
      es: "Las instituciones eligieron por votación el caso de uso ejemplar que se presentará en el showcase de noviembre. Un voto por institución, ordenando los cuatro casos.",
      en: "The institutions voted on the exemplary use case to be presented at the November showcase. One vote per institution, ranking the four cases."
    },
    /* Resultados agregados. first..fourth: n.º de instituciones que situaron el caso en cada posición.
       points: recuento Borda (1.º = 4 puntos, 2.º = 3, 3.º = 2, 4.º = 1). */
    results: {
      votes: 23,
      winner: "ES-UC1",
      items: [
        { id: "ES-UC1", first: 14, second: 6, third: 2,  fourth: 1,  points: 79 },
        { id: "ES-UC2", first: 3,  second: 8, third: 6,  fourth: 6,  points: 54 },
        { id: "ES-UC3", first: 2,  second: 7, third: 11, fourth: 3,  points: 54 },
        { id: "ES-UC4", first: 4,  second: 2, third: 4,  fourth: 13, points: 43 }
      ],
      note: {
        es: "ES-UC2 y ES-UC3 empatan a puntos; en la comparación directa, 13 de las 23 instituciones sitúan ES-UC2 por delante de ES-UC3.",
        en: "ES-UC2 and ES-UC3 are tied on points; head to head, 13 of the 23 institutions rank ES-UC2 above ES-UC3."
      }
    }
  },

  /* Casos de uso del build-up */
  usecases: [
    { id: "ES-UC1", title: { es: "EHDS: uso secundario de datos de salud, alcance One Health", en: "EHDS: secondary use of health data, One Health scope" },
      lead: "IACS", status: "planned", target: "M18 · ES-MS6", rehearsal: "M15 · ES-MS5",
      nodes: "Life Sciences Connect (EOSC ENTRUST); BBMRI-ERIC; EGI; EOSC EU Node",
      dataspace: { es: "Espacio Europeo de Datos Sanitarios", en: "European Health Data Space" } },
    { id: "ES-UC2", title: { es: "Ocean Health", en: "Ocean Health" },
      lead: "CSIC · UMU", status: "planned", target: "M18 · ES-MS6",
      nodes: { es: "European Digital Twin of the Ocean Node; Blue-Cloud 2026; integración prevista con Data Terra y el Nodo italiano", en: "European Digital Twin of the Ocean Node; Blue-Cloud 2026; planned integration with Data Terra and the Italian Node" },
      dataspace: { es: "Green Deal, componente marino", en: "Green Deal, marine component" } },
    { id: "ES-UC3", title: { es: "Euclid DR1", en: "Euclid DR1" },
      lead: "PIC · CIEMAT", status: "planned", target: "M12 · ES-MS4", rehearsal: "M9 · ES-MS3",
      nodes: "CERN Node (ESCAPE Data Lake, Rucio)",
      dataspace: { es: "Transversal (EOSC)", en: "Transverse (EOSC)" } },
    { id: "ES-UC4", title: { es: "Corpus parlamentarios (ParlaMint)", en: "Parliamentary corpora (ParlaMint)" },
      lead: "HiTZ (UPV/EHU) · IATEXT (ULPGC)", status: "planned", target: "M12 · ES-MS4",
      nodes: "EOSC Node Netherlands (SURF); EOSC Node Slovenia (CLARIN.SI)",
      dataspace: { es: "Espacios de datos lingüísticos y de patrimonio cultural", en: "Language and cultural heritage data spaces" } }
  ],

  /* Cartera inicial de recursos del Node Exchange (sección 3 del Charter R1) */
  resources: [
    { id: "ES-RES01", name: { es: "Cómputo y almacenamiento", en: "Compute and storage" }, provider: "SCAYLE · BSC-CNS · CESGA", trl: "9", uc: ["ES-UC1","ES-UC2","ES-UC3","ES-UC4"], fc: [], status: "planned" },
    { id: "ES-RES02", name: "Scientific Data Lake", provider: "PIC/CIEMAT", trl: "7", uc: ["ES-UC3"], fc: ["FC-1","FC-2"], status: "planned" },
    { id: "ES-RES03", name: { es: "Suite FAIR (FOOPS!, RSFC, FAIROs)", en: "FAIR suite (FOOPS!, RSFC, FAIROs)" }, provider: "UPM", trl: "8–9", uc: [], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES04", name: "RAISE", provider: "Biogipuzkoa", trl: "8–9", uc: ["ES-UC1"], fc: [], status: "planned" },
    { id: "ES-RES05", name: "AI4EOSC", provider: "CSIC", trl: "9", uc: ["ES-UC1","ES-UC2"], fc: ["FC-2","FC-6"], status: "planned" },
    { id: "ES-RES06", name: { es: "Privacy toolbox (Anjana, pyCANON, trasgoDP)", en: "Privacy toolbox (Anjana, pyCANON, trasgoDP)" }, provider: "CSIC", trl: "9", uc: ["ES-UC1"], fc: [], status: "planned" },
    { id: "ES-RES07", name: "CosmoHub", provider: "PIC/CIEMAT", trl: "8", uc: ["ES-UC3"], fc: ["FC-1","FC-2"], status: "planned" },
    { id: "ES-RES08", name: "NEREIDAS", provider: "UMU", trl: "7", uc: ["ES-UC2"], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES09", name: "BIGAN", provider: "IACS", trl: "8", uc: ["ES-UC1"], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES10", name: { es: "Repositorios CLARIAH-ES", en: "CLARIAH-ES repositories" }, provider: "UPV/EHU · ULPGC", trl: "8–9", uc: ["ES-UC4"], fc: ["FC-1","FC-2","FC-7"], status: "planned" },
    { id: "ES-RES11", name: { es: "Pipeline de anotación lingüística", en: "Annotation pipeline" }, provider: "CLARIAH-ES", trl: "7–8", uc: ["ES-UC4"], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES12", name: { es: "Formación y K-centre CLARIN", en: "Training and CLARIN K-centre" }, provider: "UPV/EHU · ULPGC", trl: "8", uc: ["ES-UC4"], fc: ["FC-3"], status: "planned" }
  ],

  /* Entregables del build-up (sección 7 del Charter R1). M1 = inicio del build-up */
  nodeDeliverables: [
    { id: "ES-D1", m: "M3", status: "planned", resp: { es: "[Por designar: entidad representante], con UPM y RedIRIS (marco de onboarding)", en: "[TBD: representing entity], with UPM and RedIRIS (onboarding framework)" },
      title: { es: "Gobernanza del Nodo y política de contribución de terceros", en: "Node governance and third-party contribution policy" },
      note: { es: "Convenio de colaboración firmado; términos de referencia de asamblea general, comité estratégico y comité técnico; entidad que firma el MoU; marco de onboarding (TRL ≥ 7, responsable nombrado, metadatos FAIR, perfil mínimo y validador, procedimiento de aceptación).", en: "Signed collaboration agreement; terms of reference of the general assembly, strategic and technical committees; legal entity signing the MoU; onboarding framework (TRL ≥ 7, named owner, FAIR metadata, minimum profile and validator, acceptance procedure)." } },
    { id: "ES-D2", m: "M3", status: "planned", resp: { es: "Instituciones líderes de los casos de uso (IACS, CSIC, PIC, UPV/EHU), con los Nodos contraparte", en: "Use case lead institutions (IACS, CSIC, PIC, UPV/EHU), with the counterpart Nodes" },
      title: { es: "Planes de implementación de los casos de uso", en: "Use case implementation plans" },
      note: { es: "Para cada caso: pregunta científica, comunidades, flujo de trabajo, FCs, perfil de metadatos, criterios de éxito y acuerdo escrito con el Nodo contraparte.", en: "For each case: scientific question, communities, workflow, FCs, metadata profile, success criteria and written agreement with the counterpart Node." } },
    { id: "ES-D3", m: "M9", status: "planned", resp: { es: "RedIRIS (Red.es) y FECYT (FC-1, FC-2); UPV/IACS/UJAEN y [por designar: operador del SMS] (FC-3 a FC-5)", en: "RedIRIS (Red.es) and FECYT (FC-1, FC-2); UPV/IACS/UJAEN and [TBD: SMS operator] (FC-3 to FC-5)" },
      title: { es: "Documentación técnica y de operaciones del Nodo", en: "Node technical and operations documentation" },
      note: { es: "Arquitectura AAI y catálogo con evidencias de conformidad FC-1/FC-2; helpdesk, monitorización, gestión de servicios FitSM, seguridad y plan de protección de datos (FC-3 a FC-5).", en: "AAI and catalogue architecture with FC-1/FC-2 conformance evidence; helpdesk, monitoring, FitSM service management, security and data protection plan (FC-3 to FC-5)." } },
    { id: "ES-D4", m: "M18", status: "planned", resp: { es: "Instituciones líderes de los casos de uso, con los Nodos contraparte", en: "Use case lead institutions, with the counterpart Nodes" },
      title: { es: "Informe de casos de uso", en: "Use case report" },
      note: { es: "Resultados de los cuatro casos demostrados de extremo a extremo, integración con contrapartes y lecciones para la Federación.", en: "Results of the four use cases demonstrated end to end, counterpart integration and lessons for the Federation." } },
    { id: "ES-D5", m: "M24", status: "planned", resp: { es: "Comité técnico y [por designar: entidad representante], con UPM (participación y formación)", en: "Technical committee and [TBD: representing entity], with UPM (engagement and training)" },
      title: { es: "Autoevaluación del Nodo y Project Charter actualizado", en: "Node self-assessment and updated Project Charter" },
      note: { es: "Evaluación frente a los requisitos mínimos de la Federación; informe de participación, formación y onboarding de terceros, con materiales para la EOSC Academy; Charter actualizado.", en: "Assessment against the Federation minimum requirements; engagement, training and third-party onboarding report, with materials for the EOSC Academy; updated Charter." } }
  ],

  /* Hitos del build-up (sección 9 del Charter R1). M1 = inicio del build-up */
  milestones: [
    { id: "ES-MS0", m: "M-3", status: "progress", d: [],
      title: { es: "Solicitud de enrolment en la 3.ª ola, con el endoso de la autoridad nacional competente y los cinco roles nombrados", en: "Third-wave enrolment application, with the endorsement of the competent national authority and the five roles named" } },
    { id: "ES-MS1", m: "M3", status: "planned", d: ["ES-D1","ES-D2"],
      title: { es: "Nodo constituido y abierto a proveedores: convenio firmado, órganos de gobierno constituidos, marco de onboarding publicado y planes de los casos de uso acordados con los Nodos contraparte", en: "Node constituted and open to providers: agreement signed, governance bodies constituted, onboarding framework published and use case plans agreed with the counterpart Nodes" } },
    { id: "ES-MS2", m: "M6", status: "planned", d: [],
      title: { es: "Node Core en producción: al menos un servicio integrado con la AAI federada de EOSC vía RedIRIS SIR y eduGAIN (FC-1) y al menos un catálogo nacional, RECOLECTA como primer candidato, recolectado en el ecosistema de catálogos de la Federación (FC-2)", en: "Node Core in production: at least one service integrated with the EOSC Federated AAI through RedIRIS SIR and eduGAIN (FC-1), and at least one national catalogue, RECOLECTA as first candidate, harvested into the Federation catalogue ecosystem (FC-2)" } },
    { id: "ES-MS3", m: "M9", status: "planned", d: ["ES-D3"],
      title: { es: "Primera oleada de onboarding y primera formación: cartera inicial accesible a través de la Federación, incluidos los recursos de los cuatro casos; workspace federado de ES-UC3 en operación; primera sesión de formación", en: "First onboarding wave and first training: initial portfolio accessible through the Federation, including the resources of the four use cases; ES-UC3 federated workspace in operation; first training session" } },
    { id: "ES-MS4", m: "M12", status: "planned", d: [],
      title: { es: "Operaciones del Nodo y primeros casos de uso: FC-3 y FC-4 en producción; ES-UC3 y ES-UC4 demostrados de extremo a extremo; primer evento anual EOSC-ES, onboarding de terceros abierto y ≥ 50 % de los recursos incorporados; autoevaluación intermedia", en: "Node operations and first use cases: FC-3 and FC-4 in production; ES-UC3 and ES-UC4 demonstrated end to end; first annual EOSC-ES event, third-party onboarding opened and ≥ 50% of resources onboarded; mid-term self-assessment" } },
    { id: "ES-MS5", m: "M15", status: "planned", d: [],
      title: { es: "Gestión de servicios y acceso gobernado: SMS (FC-5) establecido; ensayo de acceso gobernado de ES-UC1 sobre una cohorte ya autorizada o sintética, con la vía transfronteriza de HealthData@EU especificada", en: "Service management and governed access: SMS (FC-5) established; ES-UC1 governed-access rehearsal on an already-permitted or synthetic cohort, with the HealthData@EU cross-border pathway specified" } },
    { id: "ES-MS6", m: "M18", status: "planned", d: ["ES-D4"],
      title: { es: "ES-UC1 y ES-UC2 demostrados de extremo a extremo con sus Nodos contraparte", en: "ES-UC1 and ES-UC2 demonstrated end to end with their counterpart Nodes" } },
    { id: "ES-MS7", m: "M24", status: "planned", d: ["ES-D5"],
      title: { es: "Nodo a pleno alcance: todos los recursos comprometidos incorporados y segundo evento anual EOSC-ES", en: "Node at full scope: all committed resources onboarded and second annual EOSC-ES event" } }
  ]
};
