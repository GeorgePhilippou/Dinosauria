/* Scientific review batch: priority and recently revised genera S-Z.
   This file records full literature reviews only where the central specimen,
   age, taxonomy and uncertainty claims have been checked. Genera not listed
   here remain protected by the conservative whole-catalogue baseline audit. */
(function () {
  const scope = [
    'accepted name and taxonomic status',
    'geological age and formation',
    'known material and skeletal completeness',
    'broad classification',
    'diet and locomotion confidence',
    'major scientific disagreement'
  ];
  const P = (citation, url, type = 'primary-literature') => ({ type, citation, url });
  const N = id => ({
    type: 'authoritative-museum',
    citation: `Natural History Museum Dino Directory: ${id}`,
    url: `https://www.nhm.ac.uk/discover/dino-directory/${id}.html`
  });
  const R = (record, ageReviewNote, sources, residualUncertainty, evidence) => ({
    status: 'reviewed',
    reviewedOn: '2026-07-16',
    reviewer: 'Dinosauria editorial review',
    consensusScope: scope,
    record,
    ageReviewNote,
    sources,
    residualUncertainty,
    evidence
  });

  window.SCIENTIFIC_REVIEW_BATCH_S_Z = {
    saurophaganax: R({
      period: 'Late Jurassic',
      mya: 'Kimmeridgian-Tithonian, about 154-145 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'incertae sedis'],
      taxonomicStatus: 'contested; the historical type assemblage is chimeric and the name was treated as a nomen dubium in a 2024 reassessment',
      acceptedName: false,
      historicalProfile: true,
      length: null,
      massKg: null,
      description: 'Saurophaganax maximus is retained here as a historical name, not as a securely established giant allosaurid. A 2024 specimen-level reassessment found that material formerly grouped under the name is chimeric: the name-bearing neural arch could not be confidently identified as theropod and may be sauropod, while diagnosable theropod bones were named Allosaurus anax.',
      facts: [
        'The holotype OMNH 1123 is an isolated neural arch, not a complete or associated giant theropod skeleton.',
        'Some bones formerly referred to Saurophaganax are more consistent with diplodocid sauropods.',
        'The securely theropod material from the Kenton quarry was separated as Allosaurus anax in 2024.',
        'Older size estimates for a giant Saurophaganax combine referred bones and should not be presented as measurements of the name-bearing specimen.'
      ]
    }, 'The record is restricted to the Kenton Member of the Morrison Formation in Oklahoma. A broad formation-wide occurrence range does not establish the range of the disputed name.', [
      P('Danison et al. (2024), Chimerism in specimens referred to Saurophaganax maximus', 'https://doi.org/10.18435/vamp29404'),
      P('Danison et al. (2024), open-access article and specimen reassessment', 'https://journals.library.ualberta.ca/vamp/index.php/VAMP/article/view/29404')
    ], [
      'The dinosaurian identity of the holotype remains uncertain.',
      'The new combination Allosaurus anax and the proposed treatment of the name Saurophaganax require testing in subsequent work.'
    ], {
      score: 20,
      summary: 'The historical assemblage is chimeric; the holotype does not support the familiar giant-allosaur reconstruction.',
      material: 'An isolated name-bearing neural arch plus historically referred quarry material now divided among sauropod and theropod specimens.',
      formations: 'Kenton Member, Morrison Formation, Oklahoma, USA.',
      confidenceLimit: 'No defensible whole-body size or anatomy can be reconstructed from the holotype alone.',
      sourceBasis: 'Danison et al. 2024 specimen-level reassessment.',
      uncertainties: ['holotype identity', 'future nomenclatural treatment', 'referred-material assignment']
    }),

    segnosaurus: R({
      period: 'Late Cretaceous',
      mya: 'Cenomanian-Turonian, about 100-89 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Maniraptora', 'Therizinosauria', 'Therizinosauridae'],
      diet: 'Herbivore',
      description: 'Segnosaurus galbinensis was a large therizinosaurid from the Bayanshiree Formation of Mongolia. It is known from several partial individuals, including distinctive lower jaws and postcranial bones. Its jaws and specialised teeth support herbivory or plant-dominated omnivory, so the former catalogue label of carnivore was misleading.',
      facts: [
        'The material includes both lower jaws, vertebrae, pelvis and hind-limb elements, but no complete skeleton.',
        'The front of the lower jaw was toothless and probably bore a keratinous beak.',
        'Closely packed, coarsely serrated teeth formed a specialised food-processing surface.',
        'The 2016 dental study places Segnosaurus within the broader shift toward herbivory in derived therizinosaurs; exact foods remain unknown.'
      ]
    }, 'The type and referred specimens are from the Bayanshiree Formation. Its internal age calibration remains broader than a single point estimate.', [
      P('Zanno et al. (2016), mandibular anatomy and dentition of Segnosaurus', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4824891/'),
      P('Perle (1979), original description of Segnosaurus galbinensis', 'https://naturalhistory.si.edu/sites/default/files/media/translated_publications/Perle%252079.pdf')
    ], [
      'No direct gut contents identify the plants or other foods eaten.',
      'The specimens are incomplete and do not form one complete individual.'
    ], {
      score: 61,
      summary: 'Multiple partial individuals document a derived therizinosaur with specialised jaws and teeth consistent with plant processing.',
      material: 'Partial skull and lower jaws, vertebrae, pelvis and hind-limb bones from more than one individual.',
      formations: 'Bayanshiree Formation, Mongolia.',
      confidenceLimit: 'Plant-dominated feeding is well supported, but exact diet and whole-body proportions remain partly inferred.',
      sourceBasis: 'Perle 1979 description and Zanno et al. 2016 mandibular redescription.',
      uncertainties: ['exact food choice', 'individual association', 'precise formation age']
    }),

    spicomellus: R({
      period: 'Middle Jurassic',
      mya: 'Bathonian-Callovian, about 168-164 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Ankylosauria'],
      length: null,
      massKg: null,
      description: 'Spicomellus afer was an early ankylosaur from the El Mers Group of Morocco and is the oldest named ankylosaur currently known. The genus was initially based on a rib bearing fused spikes, but a much more complete specimen described in 2025 confirmed its ankylosaur identity and revealed exceptionally elaborate armour and a tail weapon.',
      facts: [
        'The 2021 holotype is a partial rib with dermal spikes fused directly to its surface.',
        'A more complete 2025 specimen preserves vertebrae, ribs, limb elements and diverse armour.',
        'Tail handle vertebrae show that a tail weapon evolved much earlier in ankylosaurs than previously documented.',
        'Display and defence are plausible functions of the armour, but behaviour is not directly preserved.'
      ]
    }, 'Both described specimens are from the Middle Jurassic El Mers Group of Morocco; the age is formation-level rather than a direct date on each bone.', [
      P('Maidment et al. (2021), Bizarre dermal armour suggests the first African ankylosaur', 'https://doi.org/10.1038/s41559-021-01553-6'),
      P('Maidment et al. (2025), Extreme armour in the world\'s oldest ankylosaur', 'https://www.nature.com/articles/s41586-025-09453-6')
    ], [
      'The specimens do not preserve a complete skull or skeleton.',
      'The external arrangement and behavioural functions of every armour element remain partly reconstructed.'
    ], {
      score: 78,
      summary: 'A partial rib and a much more complete second specimen directly establish an early ankylosaur with extreme dermal armour.',
      material: 'Holotype rib with fused spikes; second specimen with substantial axial, appendicular and armour material.',
      formations: 'El Mers Group, Middle Atlas, Morocco.',
      confidenceLimit: 'Armour and tail-weapon anatomy are directly supported; complete body outline and behaviour are not.',
      sourceBasis: 'Maidment et al. 2021 and 2025 descriptions.',
      uncertainties: ['complete skull anatomy', 'armour arrangement', 'display versus defence']
    }),

    spinosaurus: R({
      period: 'Late Cretaceous',
      mya: 'Cenomanian, about 100-94 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Megalosauroidea', 'Spinosauridae', 'Spinosaurinae'],
      massKg: null,
      description: 'Spinosaurus aegyptiacus was a very large spinosaurid theropod from Cenomanian North Africa. Its long narrow jaws, conical teeth, reduced nostrils, dense bones and deep tail show strong association with aquatic prey and habitats. How it fed remains actively disputed: proposed underwater pursuit and diving conflict with biomechanical analyses favouring wading or surface feeding.',
      facts: [
        'The original Egyptian type material was destroyed in 1944; modern reconstructions combine later Moroccan material whose association and species-level referral have been debated.',
        'A partial skeleton described in 2014 and expanded in 2020 preserves shortened hind limbs and a deep, flexible tail.',
        'High bone density was interpreted in 2022 as evidence for subaqueous foraging.',
        'A 2022 eLife analysis argued that stability, drag and buoyancy make a fully aquatic pursuit-predator model unlikely.',
        'Semiaquatic adaptations are well supported, but a single settled swimming and hunting model is not.'
      ]
    }, 'The reviewed range follows Cenomanian material from the Bahariya Formation and Kem Kem Group. Isolated spinosaurid material should not automatically extend the species range.', [
      P('Ibrahim et al. (2014), Semiaquatic adaptations in a giant predatory dinosaur', 'https://doi.org/10.1126/science.1258750'),
      P('Ibrahim et al. (2020), Tail-propelled aquatic locomotion in a theropod dinosaur', 'https://doi.org/10.1038/s41586-020-2190-3'),
      P('Fabbri et al. (2022), Subaqueous foraging among carnivorous dinosaurs', 'https://www.nature.com/articles/s41586-022-04528-0'),
      P('Sereno et al. (2022), Spinosaurus is not an aquatic dinosaur', 'https://elifesciences.org/articles/80092')
    ], [
      'The association and taxonomic identity of some Moroccan bones remain debated.',
      'Maximum length and mass estimates depend strongly on composite reconstruction.',
      'The extent of diving and underwater propulsion remains an active scientific disagreement.'
    ], {
      score: 67,
      summary: 'Substantial but composite material supports a semiaquatic spinosaurid; its exact locomotion and hunting mode remain disputed.',
      material: 'Destroyed Egyptian type plus later Moroccan cranial, axial, limb and tail material, not one universally accepted complete skeleton.',
      formations: 'Bahariya Formation, Egypt; Kem Kem Group, Morocco.',
      confidenceLimit: 'Semiaquatic specialisation is secure; exact body dimensions and underwater performance are model-dependent.',
      sourceBasis: 'Ibrahim et al. 2014/2020, Fabbri et al. 2022 and Sereno et al. 2022.',
      uncertainties: ['specimen association', 'maximum size', 'underwater foraging mode']
    }),

    stenonychosaurus: R({
      period: 'Late Cretaceous',
      mya: 'Campanian, about 76-74 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Maniraptora', 'Paraves', 'Troodontidae'],
      taxonomicStatus: 'validity and synonymy with Troodon are currently disputed',
      description: 'Stenonychosaurus inequalis is the name applied since 2017 to troodontid skeletal material from the Dinosaur Park Formation of Alberta. A 2025 paper instead argued that it is a junior synonym of Troodon formosus and proposed a neotype for Troodon. Because that neotype requires formal ICZN action, the wiki presents both treatments rather than declaring either settled.',
      facts: [
        'The Stenonychosaurus holotype CMN 8539 comprises hind-limb elements and is itself incomplete.',
        'A 2017 revision separated Dinosaur Park troodontid skeletons from the tooth-based name Troodon.',
        'A 2025 analysis found the Two Medicine and Dinosaur Park material closely comparable and preferred the older name Troodon.',
        'Claims about exceptional intelligence are based mainly on relative braincase size and should not be translated into human-like cognition.'
      ]
    }, 'The profile is restricted to Campanian Dinosaur Park Formation material; it does not inherit every historical North American occurrence assigned to Troodon.', [
      P('van der Reest & Currie (2017), troodontids from the Dinosaur Park Formation', 'https://doi.org/10.1139/cjes-2017-0031'),
      P('Varricchio, Hogan & Gardner (2025), validity of Troodon formosus', 'https://www.cambridge.org/core/journals/journal-of-paleontology/article/troodontid-specimens-from-the-cretaceous-two-medicine-formation-of-montana-usa-and-the-validity-of-troodon-formosus/3E58F1FDA3FE53DE569E0D0B20E79F22'),
      N('stenonychosaurus')
    ], [
      'The 2025 Troodon neotype proposal has not by itself replaced the existing holotype.',
      'The limits of Stenonychosaurus relative to Troodon and other Campanian troodontids remain contested.'
    ], {
      score: 55,
      summary: 'Partial but informative troodontid skeletons are known; which genus name should apply is under renewed debate.',
      material: 'Fragmentary holotype hind limb plus more extensive referred cranial and postcranial material from the Dinosaur Park Formation.',
      formations: 'Dinosaur Park Formation, Alberta, Canada.',
      confidenceLimit: 'Anatomy of the referred troodontid is better supported than the currently disputed genus-level name.',
      sourceBasis: 'van der Reest & Currie 2017 and Varricchio et al. 2025.',
      uncertainties: ['Troodon synonymy', 'type diagnostic value', 'extent of referred material']
    }),

    stenopelix: R({
      period: 'Early Cretaceous',
      mya: 'late Berriasian, about 141-139 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', '?Marginocephalia'],
      description: 'Stenopelix valdensis is a small ornithischian from the Lower Cretaceous of north-western Germany, known from one largely articulated skeleton that lacks the skull. Re-examination found its anatomy compatible with Marginocephalia but insufficient to identify it confidently as either a pachycephalosaur or ceratopsian.',
      facts: [
        'The holotype is the most complete dinosaur skeleton known from the German Wealden deposits but preserves no skull.',
        'Characters formerly used to place it in Pachycephalosauria or Ceratopsia were reinterpreted or found to be more widespread.',
        'It is best treated conservatively as a possible marginocephalian rather than the earliest confirmed pachycephalosaur.',
        'Diet and detailed head anatomy cannot be established directly without the skull.'
      ]
    }, 'The holotype comes from the Obernkirchen Sandstone of the Bueckeberg Formation and is late Berriasian; the former 127-121 Ma range was too young.', [
      P('Butler & Sullivan (2009), phylogenetic position of Stenopelix valdensis', 'https://www.app.pan.pl/article/item/app54-021.html'),
      N('stenopelix')
    ], [
      'The skull is entirely unknown.',
      'Even referral to Marginocephalia remains tentative.'
    ], {
      score: 47,
      summary: 'One associated skull-less skeleton is well preserved, but it cannot securely resolve whether Stenopelix was a pachycephalosaur or ceratopsian.',
      material: 'Largely articulated postcranial holotype; skull absent.',
      formations: 'Obernkirchen Sandstone, Bueckeberg Formation, Germany.',
      confidenceLimit: 'Postcranial anatomy is direct evidence; skull, diet and fine classification are unknown or tentative.',
      sourceBasis: 'Butler & Sullivan 2009 redescription.',
      uncertainties: ['marginocephalian affinity', 'skull anatomy', 'diet']
    }),

    stygimoloch: R({
      period: 'Late Cretaceous',
      mya: 'latest Maastrichtian, about 67-66 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Marginocephalia', 'Pachycephalosauria', 'Pachycephalosauridae', 'Pachycephalosaurus'],
      taxonomicStatus: 'usually treated as a juvenile or subadult Pachycephalosaurus, possibly P. spinifer, rather than a separate genus',
      acceptedName: false,
      length: null,
      massKg: null,
      description: 'Stygimoloch spinifer is a historical name for spiky pachycephalosaur skull material from latest Cretaceous North America. Cranial growth and histology studies support interpreting this morphology as an immature stage of Pachycephalosaurus rather than a separate genus, although whether spinifer represents a distinct species within Pachycephalosaurus remains open.',
      facts: [
        'The holotype and referred material are incomplete skull roofs and skulls, not complete skeletons.',
        'The best-preserved skull shows a small dome with long rear spikes.',
        'Horner and Goodwin interpreted the porous, rapidly changing skull tissue as subadult anatomy between Dracorex-like juveniles and adult Pachycephalosaurus.',
        'The page is retained to explain the familiar historical name and the continuing species-level question.'
      ]
    }, 'The relevant material is from latest Maastrichtian Hell Creek and equivalent deposits. Occurrence counts do not distinguish growth stages reliably.', [
      P('Horner & Goodwin (2009), Extreme cranial ontogeny in Pachycephalosaurus', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2762616/'),
      P('Goodwin, Buchholtz & Johnson (1998), cranial anatomy of Stygimoloch spinifer', 'https://doi.org/10.1080/02724634.1998.10011064'),
      N('stygimoloch')
    ], [
      'The genus-level synonymy is well supported but not universally adopted in phylogenetic datasets.',
      'Whether spinifer is merely an ontogenetic stage of P. wyomingensis or a second Pachycephalosaurus species remains unresolved.'
    ], {
      score: 42,
      summary: 'Several skull specimens document the morphology, but most current interpretations treat it as immature Pachycephalosaurus rather than a distinct genus.',
      material: 'Partial skull roofs and skulls with domes and posterior spikes; no independent complete postcranial skeleton.',
      formations: 'Hell Creek and equivalent latest Maastrichtian units, western North America.',
      confidenceLimit: 'The skull morphology is preserved, but its taxonomic rank depends on interpreting dramatic growth-related change.',
      sourceBasis: 'Goodwin et al. 1998 anatomy and Horner & Goodwin 2009 ontogenetic analysis.',
      uncertainties: ['species versus growth stage', 'generic rank', 'postcranial association']
    }),

    tanius: R({
      period: 'Late Cretaceous',
      mya: 'Campanian, about 84-72 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Iguanodontia', 'Hadrosauroidea'],
      description: 'Tanius sinensis was a basally branching hadrosauroid from the Upper Cretaceous Wangshi Group of Shandong, China. Modern postcranial revision supports the type species as diagnosable, while the other species historically assigned to Tanius are dubious or belong elsewhere.',
      facts: [
        'The type individual includes a partial skull and much of the postcranial skeleton, but is not complete.',
        'Tanius sinensis falls outside the most derived hadrosaurids in recent analyses.',
        'T. chingkankouensis was regarded as a nomen dubium and T. laiyangensis was separated as Laiyangosaurus.',
        'Herbivory and facultative quadrupedality follow hadrosauroid anatomy; exact behaviour and herd size are not directly preserved.'
      ]
    }, 'The type species is from the Jiangjunding Formation of the Wangshi Group. A former 89-66 Ma genus-wide range incorrectly blended uncertain species and formations.', [
      P('Borinder et al. (2021), postcranial osteology of Tanius sinensis', 'https://doi.org/10.1080/02724634.2021.1914642'),
      P('Zhang et al. (2020), Osteological re-assessment and taxonomic revision of Tanius laiyangensis', 'https://doi.org/10.1002/ar.24097'),
      N('tanius')
    ], [
      'A complete modern cranial redescription and full phylogenetic revision remain desirable.',
      'The exact age calibration of Wangshi Group units varies among studies.'
    ], {
      score: 66,
      summary: 'A partial skull and substantial postcranium support the validity of Tanius sinensis, but not the old multi-species concept of the genus.',
      material: 'Associated partial skull and substantial axial and appendicular skeleton of the type species.',
      formations: 'Jiangjunding Formation, Wangshi Group, Shandong, China.',
      confidenceLimit: 'The type species is diagnosable; historical referrals and a very broad time range are not.',
      sourceBasis: 'Borinder et al. 2021 postcranial revision and Zhang et al. 2017 taxonomic comparison.',
      uncertainties: ['cranial revision', 'formation age calibration', 'historical referrals']
    }),

    tenontosaurus: R({
      period: 'Early Cretaceous',
      mya: 'Aptian-Albian, about 120-105 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Iguanodontia'],
      description: 'Tenontosaurus was a medium-to-large iguanodontian ornithopod from the Early Cretaceous of North America. Many skeletons, including a near-complete individual, document its long tail and robust body. Multi-individual sites and associations with Deinonychus are real, but they do not by themselves prove permanent herds or coordinated pack hunting.',
      facts: [
        'Tenontosaurus tilletti is represented by numerous partial skeletons and at least one near-complete skeleton.',
        'The tail was exceptionally long and reinforced by ossified tendons.',
        'Several bonebeds contain Deinonychus teeth and remains, demonstrating repeated ecological association but not a unique hunting strategy.',
        'Multi-individual accumulations may reflect sociality, drought or transport; the wiki no longer states herd behaviour as established fact.'
      ]
    }, 'The reviewed range covers secure Aptian-Albian occurrences in the Cloverly and Antlers formations. Other referrals require specimen-level review.', [
      P('Forster (1990), evidence for juvenile groups in the ornithopod Tenontosaurus', 'https://doi.org/10.1017/S0022336000042402'),
      P('Maxwell & Ostrom (1995), taphonomy and palaeobiology of Tenontosaurus-Deinonychus associations', 'https://doi.org/10.1080/02724634.1995.10011256'),
      P('Thomas (2013), osteology of a near-complete Tenontosaurus skeleton', 'https://arxiv.org/abs/1304.2616'),
      N('tenontosaurus')
    ], [
      'The causes of multi-individual accumulations and predator-prey associations remain debated.',
      'The validity and limits of the second named species T. dossi require further revision.'
    ], {
      score: 82,
      summary: 'Numerous skeletons give strong anatomical coverage; social and predator-prey behaviour remain interpretations of assemblages.',
      material: 'Many partial skeletons and a near-complete individual, plus multi-individual bonebeds.',
      formations: 'Cloverly Formation and Antlers Formation, western and south-central USA.',
      confidenceLimit: 'Anatomy is well known, but bonebeds do not directly prove permanent herding or coordinated pack hunting.',
      sourceBasis: 'Forster 1990, Maxwell & Ostrom 1995 and Thomas 2013.',
      uncertainties: ['social behaviour', 'Deinonychus interaction', 'species limits']
    }),

    torosaurus: R({
      period: 'Late Cretaceous',
      mya: 'latest Maastrichtian, about 68-66 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Marginocephalia', 'Ceratopsia', 'Ceratopsidae', 'Chasmosaurinae', 'Triceratopsini'],
      taxonomicStatus: 'generally retained as distinct, with a disputed hypothesis that it represents mature Triceratops',
      description: 'Torosaurus was a very large chasmosaurine ceratopsid from latest Cretaceous North America, diagnosed mainly from skulls with an elongated, fenestrated frill. A prominent hypothesis interprets Torosaurus as the fully mature form of Triceratops, but other analyses and Canadian material support retaining it as a distinct genus. The wiki presents this as an unresolved taxonomic debate.',
      facts: [
        'Skulls and frill material are much better represented than the postcranial skeleton.',
        'Scannella and Horner proposed in 2010 that frill remodelling transformed mature Triceratops into the Torosaurus morphology.',
        'Longrich and Field found apparently immature Torosaurus and mature Triceratops characters inconsistent with a simple growth sequence.',
        'Canadian specimens described in 2022 expand the geographic record and were considered consistent with a distinct genus.'
      ]
    }, 'Secure occurrences are latest Maastrichtian. Formation-wide database ranges and contested referrals should not broaden the headline age without specimen review.', [
      P('Scannella & Horner (2010), Torosaurus as the mature form of Triceratops', 'https://doi.org/10.1080/02724634.2010.483632'),
      P('Longrich & Field (2012), Torosaurus is not Triceratops', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0032623'),
      P('Mallon et al. (2022), Canadian Torosaurus and taxonomic implications', 'https://doi.org/10.1093/zoolinnean/zlab120')
    ], [
      'Whether all Torosaurus specimens can be separated from mature Triceratops remains disputed.',
      'The postcranial anatomy is less securely known than the skull.'
    ], {
      score: 69,
      summary: 'Multiple diagnostic skulls support a distinct morphology, while its relationship to mature Triceratops remains debated.',
      material: 'Several skulls and isolated frill elements; relatively sparse securely associated postcrania.',
      formations: 'Hell Creek, Lance and equivalent latest Maastrichtian formations of North America.',
      confidenceLimit: 'The fenestrated frill is direct evidence; whether it marks a genus or a growth stage remains contested.',
      sourceBasis: 'Scannella & Horner 2010, Longrich & Field 2012 and Mallon et al. 2022.',
      uncertainties: ['Triceratops synonymy', 'ontogenetic sampling', 'postcranial anatomy']
    }),

    troodon: R({
      period: 'Late Cretaceous',
      mya: 'Campanian, about 77-74 million years ago for the currently argued species concept',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Maniraptora', 'Paraves', 'Troodontidae'],
      taxonomicStatus: 'contested tooth-based name; a 2025 paper defended validity and proposed a neotype, reversing the prevalent post-2017 treatment',
      acceptedName: false,
      length: null,
      massKg: null,
      description: 'Troodon formosus was named from a single tooth collected in Montana. From 2017 the tooth was widely treated as insufficient to anchor the many skeletons historically assigned to Troodon, and those fossils were reassigned to Stenonychosaurus and other taxa. A 2025 study defended Troodon as valid, synonymised Stenonychosaurus with it and proposed a Two Medicine Formation skeleton as a neotype. That neotype requires ICZN action, so the issue is not presented as settled.',
      facts: [
        'The holotype ANSP 9259 is one isolated tooth with incomplete locality information.',
        'The familiar full-body reconstruction was assembled from referred troodontid skeletons, not from the holotype.',
        'The 2017 revisions treated Troodon as a doubtful name and restored Stenonychosaurus for Dinosaur Park material.',
        'The 2025 paper argued for priority and stability under Troodon and proposed MOR 553 as a neotype, but explicitly noted that only the ICZN can replace an existing holotype in this way.'
      ]
    }, 'A single genus-wide 77-66 Ma range is not defensible while the name-bearing tooth and referred skeletons remain taxonomically disputed. The current 2025 species concept focuses on Campanian Montana and Alberta material.', [
      P('van der Reest & Currie (2017), Troodontids from the Dinosaur Park Formation and implications for deinonychosaur diversity', 'https://doi.org/10.1139/cjes-2017-0031'),
      P('Varricchio, Hogan & Gardner (2025), validity of Troodon formosus', 'https://www.cambridge.org/core/journals/journal-of-paleontology/article/troodontid-specimens-from-the-cretaceous-two-medicine-formation-of-montana-usa-and-the-validity-of-troodon-formosus/3E58F1FDA3FE53DE569E0D0B20E79F22')
    ], [
      'The proposed neotype has not yet been established by an ICZN ruling.',
      'Researchers disagree on whether the original tooth can anchor the expanded skeletal species concept.',
      'Historic records from many formations cannot all be retained without specimen-level revision.'
    ], {
      score: 27,
      summary: 'The name is based on one tooth; a 2025 attempt to reconnect it to skeletal material has reopened rather than eliminated the taxonomic dispute.',
      material: 'Single tooth holotype; more complete skeletons belong to a contested referred species concept and proposed neotype.',
      formations: 'Judith River locality uncertain; proposed neotype from Two Medicine Formation, Montana; compared material from Dinosaur Park Formation, Alberta.',
      confidenceLimit: 'Troodontid anatomy is known from the referred specimens, but the name Troodon is not yet securely anchored to them.',
      sourceBasis: '2017 Dinosaur Park revision and Varricchio et al. 2025 neotype proposal.',
      uncertainties: ['neotype petition', 'tooth diagnostic value', 'synonymy with Stenonychosaurus']
    }),

    yingshanosaurus: R({
      period: 'Late Jurassic',
      mya: 'Oxfordian, approximately 162-157 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Stegosauria', 'Stegosauridae'],
      taxonomicStatus: 'accepted',
      length: null,
      massKg: null,
      description: 'Yingshanosaurus jichuanensis is a stegosaur from the Upper Shaximiao Formation of Sichuan, China, based on a partial skeleton with an incomplete skull and armour. It is not a nomen nudum: Zhu Songlin published a formal description in 1994, contrary to older English-language summaries. Its validity and exact relationships still need modern revision.',
      facts: [
        'The holotype CV 00722 is a partial skeleton including incomplete cranial and postcranial material and dermal armour.',
        'The name circulated informally before 1994, which explains the outdated nomen nudum label in some catalogues.',
        'Zhu\'s 1994 paper supplied the formal genus and species description.',
        'The striking shoulder-spine reconstruction and precise body dimensions require rechecking against the original specimen rather than copying exhibition mounts.'
      ]
    }, 'The holotype is from the Upper Shaximiao Formation. Numerical ages for that terrestrial unit remain under revision, so the displayed Oxfordian range is approximate.', [
      P('Zhu (1994), Record of a fossil stegosaur from Yingshan in the Sichuan Basin, Sichuan Cultural Relics 1994(S1): 8-14', 'https://www.mindat.org/taxon-9735898.html', 'original-description-bibliography'),
      P('Maidment et al. (2008), phylogeny and comparative record of Stegosauria', 'https://doi.org/10.1017/S1477201908002459'),
      N('yingshanosaurus')
    ], [
      'The original description is difficult to access outside China and the specimen lacks a modern full redescription.',
      'Its diagnostic status and precise position within Stegosauria require renewed study.',
      'The age of the Upper Shaximiao Formation is still being refined.'
    ], {
      score: 39,
      summary: 'A formally described partial stegosaur skeleton exists, correcting the widespread claim that the name is a nomen nudum.',
      material: 'Partial associated skeleton with incomplete skull, postcrania and dermal armour (CV 00722).',
      formations: 'Upper Shaximiao Formation, Sichuan, China.',
      confidenceLimit: 'Formal publication is established; anatomical diagnosis, mounted proportions and exact age need modern specimen-level revision.',
      sourceBasis: 'Zhu 1994 original-description record and later stegosaur comparative literature.',
      uncertainties: ['modern validity assessment', 'armour association', 'formation age']
    })
  };
})();
