/* Editorial scientific-review ledger.
   A profile belongs here only after its core claims have been checked against
   primary literature or an authoritative taxonomic/museum source. Automated
   imports, PBDB range comparisons and AI-drafted prose never set this status. */
window.SCIENTIFIC_REVIEWS = {
  aardonyx: {
    status: 'reviewed',
    reviewedOn: '2026-07-23',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'name-bearing and referred fossil material',
      'type locality and geological formation',
      'minimum number and growth stage of individuals',
      'skeletal-coverage wording',
      'locomotor and feeding interpretations',
      'profile narrative and residual uncertainty'
    ],
    record: {
      period: 'Early Jurassic',
      mya: 'about 200–190 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Anchisauria', 'Aardonyx'],
      diet: 'Herbivore',
      locomotion: 'Habitually bipedal; capable of quadrupedal walking',
      description: 'Aardonyx was a large early sauropodomorph from Early Jurassic South Africa. Its jaws and limbs preserve a combination of features associated with mostly bipedal ancestors and the bulk-feeding, quadrupedal sauropods that evolved later.',
      facts: [
        'The holotype BP/1/6254 is the rostral half of a left maxilla.',
        'A nearby caudal left-maxilla fragment, BP/1/6505, may be part of the same bone as the holotype.',
        'Referred material from Marc’s Quarry includes cranial and mandibular elements, cervical, dorsal, sacral and caudal vertebrae, ribs, gastralia, chevrons, girdle elements, and bones of the forelimbs, hindlimbs, hands and feet.',
        'The quarry assemblage appears to represent two immature individuals; the smaller individual is about 85 per cent of the larger in linear postcranial dimensions.',
        'Histology of a rib and scapular fragment showed continuing growth and suggested that the sampled individual or individuals may have been younger than ten years at death.',
        'The disarticulated material supports a broad anatomical reconstruction, but specimen association, adult proportions and soft tissues remain uncertain.'
      ]
    },
    presentation: {
      heroLead: 'A large plant-eating sauropodomorph whose jaws and limbs illuminate the early evolution of sauropod feeding and four-legged weight-bearing.',
      heroMedia: {
        file: 'Fig 2 - Aardonyx life restoration by Matthew Bonnan.jpg',
        title: 'Life restoration of Aardonyx celestae',
        alt: 'Scientific life restoration of Aardonyx celestae in side view',
        caption: 'Scientific life restoration by Matthew Bonnan. External soft tissues and colour remain interpretive.',
        credit: 'Matthew Bonnan · public domain',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fig_2_-_Aardonyx_life_restoration_by_Matthew_Bonnan.jpg'
      },
      quickFacts: [
        { label: 'Age', value: 'Early Jurassic · about 200–190 Ma' },
        { label: 'Location', value: 'Free State, South Africa' },
        { label: 'Known size', value: 'about 7 m · immature animals' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Aardonyx was a long-necked, small-headed plant-eater from what is now South Africa. The two known animals were about seven metres long when they died, but bone tissue shows that both were still growing, so the proportions and maximum size of a mature animal are not directly known.',
        'Its jaws retain the narrow, pointed outline seen in earlier sauropodomorphs, while other features suggest a wider gape and a shift towards taking in vegetation in bulk. The particular plants it ate are not preserved.',
        'The hindlimbs indicate habitual bipedal movement, but the forelimbs and feet also show features connected with bearing weight on all four limbs. This mosaic of traits makes Aardonyx useful for studying a gradual evolutionary transition rather than a simple halfway form.'
      ],
      animalHighlights: [
        'A long neck, small head and deep body placed Aardonyx within the early radiation of large-bodied sauropodomorphs.',
        'Jaw anatomy combines a narrow snout with features associated with a wider gape and less selective bulk feeding.',
        'Limb anatomy supports mostly two-legged movement while showing an increasing capacity for four-legged weight-bearing.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Plant-eater',
          level: 'Supported by jaw and tooth anatomy',
          reason: 'The skull supports herbivory and a developing bulk-browsing style. No gut contents preserve a specific menu.'
        },
        {
          label: 'Movement',
          value: 'Mostly bipedal',
          level: 'Could also walk on all fours',
          reason: 'Hindlimb anatomy supports habitual bipedality; the forelimbs and feet show an increasing capacity to bear weight.'
        },
        {
          label: 'Known size',
          value: 'about 7 m long',
          level: 'Both known animals were immature',
          reason: 'An adult was probably larger, but no mature skeleton directly establishes its final length or mass.'
        },
        {
          label: 'Appearance',
          value: 'Skeletal outline supported',
          level: 'Soft tissues remain reconstructed',
          reason: 'Overall proportions can be inferred from the bones; colour, skin texture and the exact external profile are unknown.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Early Jurassic' },
        { label: 'Approximate age', value: 'about 200–190 million years ago' },
        { label: 'Rock unit', value: 'upper Elliot Formation' },
        { label: 'Type locality', value: 'Marc’s Quarry, Spion Kop 932, Free State, South Africa' }
      ],
      locality: {
        name: 'Marc’s Quarry',
        region: 'Spion Kop 932, Free State, South Africa',
        note: 'Upper Elliot Formation. The map shows a country-level reference because exact quarry coordinates are not plotted.'
      },
      classificationSummary: 'Aardonyx is an early sauropodomorph close to the evolutionary origin of Sauropoda. It preserves a combination of ancestral and sauropod-like traits, although its exact position changes among phylogenetic analyses.',
      related: [
        { id: 'massospondylus', reason: 'Compare with a more lightly built, habitually bipedal Early Jurassic sauropodomorph.' },
        { id: 'melanorosaurus', reason: 'Compare with a larger-bodied sauropodomorph closer to the sauropod body plan.' },
        { id: 'vulcanodon', reason: 'Compare with an early sauropod showing committed four-legged weight-bearing.' }
      ],
      questions: [
        {
          title: 'How large was an adult?',
          copy: 'Both known individuals were still growing. Larger adult estimates are extrapolations rather than measurements from a mature skeleton.'
        },
        {
          title: 'Which bones belonged together?',
          copy: 'The quarry material is disarticulated. The assemblage supports two individuals, but every bone cannot be assigned to a single associated skeleton.'
        },
        {
          title: 'Exactly where does it sit on the family tree?',
          copy: 'Analyses consistently place Aardonyx near the sauropod transition, but its precise relationship to other early sauropodomorphs varies.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'The profile follows the Early Jurassic upper Elliot Formation assignment of the Marc’s Quarry type assemblage. The original description did not provide a narrow numerical radiometric age for the quarry.',
    sources: [
      { type: 'original-description', citation: 'Yates et al. (2010), A new transitional sauropodomorph dinosaur from the Early Jurassic of South Africa', url: 'https://doi.org/10.1098/rspb.2009.1440' },
      { type: 'open-manuscript', citation: 'Yates et al. (2010), archived manuscript at Europe PMC', url: 'https://europepmc.org/articles/PMC2842739' },
      { type: 'museum-synthesis', citation: 'Natural History Museum, Aardonyx', url: 'https://www.nhm.ac.uk/discover/dino-directory/aardonyx.html' }
    ],
    residualUncertainty: [
      'The referred bones are disarticulated rather than preserved as two associated skeletons.',
      'Both reconstructed individuals were immature, so adult body proportions and maximum size are not directly known.',
      'BP/1/6505 may belong to the holotype maxilla, but the two fragments do not overlap.',
      'No direct skin, colour, gut-content or other soft-tissue evidence is known.',
      'The exact phylogenetic position of Aardonyx near the origin of Sauropoda varies among analyses.'
    ],
    evidence: {
      score: 64,
      summary: 'Numerous disarticulated bones from one quarry collectively represent most major skeletal regions of two immature individuals, but there is no complete, articulated or adult skeleton.',
      material: 'Holotype BP/1/6254, the rostral half of a left maxilla, plus disarticulated cranial, axial, girdle and limb material from Marc’s Quarry attributed to two immature individuals.',
      formations: ['Upper Elliot Formation — Marc’s Quarry, Spion Kop 932, Free State, South Africa'],
      confidenceLimit: 'Taxon-level skeletal coverage is broad, while individual association, adult anatomy, maximum size and soft tissues remain uncertain.',
      sourceBasis: 'Yates et al. 2010, checked against the Natural History Museum synthesis.',
      specimens: [
        {
          name: 'Holotype',
          id: 'BP/1/6254',
          institution: 'University of the Witwatersrand, BP collection',
          note: 'Rostral half of a left maxilla. BP/1/6505, found about one metre away, is a non-overlapping caudal maxilla fragment that may represent the same bone.'
        },
        {
          name: 'Marc’s Quarry referred assemblage',
          id: 'BP/1 series',
          institution: 'University of the Witwatersrand, BP collection',
          note: 'Numerous disarticulated cranial and postcranial elements interpreted as two immature individuals rather than two complete associated skeletons.'
        }
      ],
      uncertainties: ['disarticulated assemblage', 'immature individuals', 'adult size', 'soft tissues', 'phylogenetic position'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'Partial skull and skeleton remains from two young animals.',
        standfirst: 'Aardonyx is known from disarticulated skull, vertebral, girdle and limb bones representing at least two immature individuals. The name-bearing fossil is part of the upper jaw rather than a complete skeleton.',
        coverage: {
          label: 'Moderate',
          level: 3,
          maximum: 4,
          basis: 'Most major skeletal regions are represented across the quarry assemblage, but the bones are disarticulated and neither individual is complete.'
        },
        metrics: [
          { label: 'Known remains', value: 'Partial skull and skeleton' },
          { label: 'Individuals', value: 'At least 2' },
          { label: 'Key limitation', value: 'No complete adult skeleton' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'Collectively, the quarry material represents most major parts of the skeleton, including parts of the skull and jaws, vertebral column, shoulder and hip girdles, and all four limbs.',
          note: 'Because the bones were found disarticulated and both animals were still growing, the precise proportions and maximum adult size of Aardonyx remain uncertain.'
        },
        media: [
          {
            file: 'Aardonyx skull.png',
            kind: 'Known-material diagram',
            title: 'Reconstructed skull and preserved cranial material',
            alt: 'Diagram of the Aardonyx skull showing known cranial material',
            caption: 'A source-based diagram showing the cranial material known for Aardonyx; this is an anatomical reconstruction, not a photograph of one complete skull.',
            credit: 'IJReid · CC BY 4.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aardonyx_skull.png'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Premaxilla, maxillary material including the holotype, dentary and other cranial elements.' },
          { label: 'Vertebral column', value: 'Cervical, dorsal, sacral and caudal vertebrae, with cervical and dorsal ribs, gastralia and chevrons.' },
          { label: 'Girdles and limbs', value: 'Pectoral and pelvic girdle elements; forelimb and hindlimb bones, including material from the hands and feet.' },
          { label: 'Exceptional preservation', value: 'Bone microstructure is preserved and was sampled histologically; no skin, feathers, colour or gut contents are known.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'BP/1/6254 · holotype',
            description: 'The rostral half of a left maxilla. A separate caudal fragment, BP/1/6505, was found nearby and may belong to the same maxilla, but the fragments do not overlap.',
            meta: 'Marc’s Quarry · upper Elliot Formation · University of the Witwatersrand BP collection'
          },
          {
            kicker: 'Referred quarry material',
            title: 'Two immature individuals',
            description: 'A large set of disarticulated cranial and postcranial bones from the type quarry. Histology indicates continued growth, and the original authors suggested that the sampled animals may have been younger than ten years.',
            meta: 'One quarry assemblage · specimen association reconstructed taphonomically'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'A maxillary holotype and numerous cranial, vertebral, girdle and limb elements, all from the type quarry.'
          },
          {
            label: 'Scientific interpretation',
            value: 'The limb and jaw anatomy records an important stage between habitually bipedal early sauropodomorphs and the feeding and weight-bearing adaptations of sauropods.'
          },
          {
            label: 'Still unknown',
            value: 'Adult size and proportions, exact association of every bone, external soft tissues, colour and the full shape of an individual skull.'
          }
        ],
        resources: [
          {
            type: 'Primary description',
            title: 'Yates et al. · 2010',
            description: 'Original diagnosis, fossil inventory, histology and functional interpretation.',
            access: 'DOI record',
            url: 'https://doi.org/10.1098/rspb.2009.1440'
          },
          {
            type: 'Open manuscript',
            title: 'Proceedings of the Royal Society B',
            description: 'Accessible archived text and figures from the original study.',
            access: 'Read online',
            url: 'https://europepmc.org/articles/PMC2842739'
          },
          {
            type: 'Museum synthesis',
            title: 'Natural History Museum',
            description: 'Accessible overview of the two young individuals and what they reveal.',
            access: 'Read online',
            url: 'https://www.nhm.ac.uk/discover/dino-directory/aardonyx.html'
          },
          {
            type: 'Evidence image',
            title: 'Known-material skull diagram',
            description: 'Source page, creator details and reuse licence for the cranial reconstruction.',
            access: 'CC BY 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:Aardonyx_skull.png'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence, locality and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=157362'
          }
        ],
        limitations: 'The coverage band describes the combined securely referred material at genus level. It is an editorial evidence summary, not a published percentage and not a count of PBDB occurrences.',
        reviewedLabel: 'Primary description checked · 23 July 2026'
      }
    }
  },
  afrovenator: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and classification',
      'geological age and formation',
      'known skeletal material',
      'body-size confidence',
      'diet and locomotion',
      'profile narrative and uncertainty wording'
    ],
    record: {
      period: 'Mid Jurassic',
      mya: 'about 168–161 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Megalosauroidea', 'Megalosauridae', 'Afrovenatorinae'],
      description: 'Afrovenator was a large megalosaurid theropod from the Tiourarén Formation of Niger. It is represented by one relatively complete partial skeleton, including substantial cranial and postcranial material. The formation was initially described as Early Cretaceous but is now most plausibly regarded as late Middle Jurassic.',
      facts: [
        'Known primarily from the holotype MNN TIG1 (formerly UC OBA 1), a relatively complete partial skull and skeleton.',
        'The preserved material includes much of the skull, parts of the vertebral column, forelimbs and hands, much of the pelvis, and most of the hind limbs.',
        'A 2009 reassessment concluded that the Tiourarén dinosaur fauna is probably late Middle Jurassic rather than Early Cretaceous.',
        'Afrovenator is placed within Megalosauridae; its exact position within that family varies among phylogenetic analyses.'
      ]
    },
    presentation: {
      heroLead: 'A large Jurassic megalosaurid predator from the Sahara, known from one unusually informative partial skeleton.',
      heroMedia: {
        file: 'Afrovenator reconstruction.png',
        title: 'Life restoration of Afrovenator abakensis',
        alt: 'Life restoration of the theropod Afrovenator abakensis in side view',
        caption: 'Life restoration by PaleoEquii. Skin, colour and soft-tissue outline are interpretive.',
        credit: 'PaleoEquii · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Afrovenator_reconstruction.png'
      },
      quickFacts: [
        { label: 'Age', value: 'Middle Jurassic · about 168–161 Ma' },
        { label: 'Location', value: 'Agadez region, Niger' },
        { label: 'Known size', value: 'about 7–8 m · one individual' },
        { label: 'Diet', value: 'Carnivore' }
      ],
      animalParagraphs: [
        'Afrovenator was a large two-legged meat-eater from what is now the southern Sahara. The single known skeleton belonged to an animal roughly seven to eight metres long, with a long, low skull, blade-like serrated teeth and strong, three-fingered hands tipped with large claws.',
        'It belongs to Megalosauridae, a group of Jurassic predators better known from Europe. Its presence in Niger shows that these theropods ranged across the connected landmasses of the Jurassic world rather than being confined to the northern continents.',
        'The rocks that preserve it were first thought to be Early Cretaceous, which made Afrovenator look like a late survivor. Reassessment of the Tiourarén Formation places the animal in the late Middle Jurassic, among its megalosaurid relatives rather than long after them.'
      ],
      animalHighlights: [
        'A long, low skull with serrated blade-like teeth marks Afrovenator as a typical large tetanuran predator.',
        'Well-preserved forelimbs show three-fingered hands with large, strongly curved claws.',
        'The hindlimbs were long and comparatively slender for a megalosaurid, suggesting a capable walker and runner.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Meat-eater',
          level: 'Supported by skull and tooth anatomy',
          reason: 'Recurved, serrated teeth and a deep, narrow snout are consistent with hunting or scavenging large prey. No gut contents are known.'
        },
        {
          label: 'Movement',
          value: 'Bipedal',
          level: 'Supported by hindlimb anatomy',
          reason: 'Most of the hindlimb is preserved and shows the standard theropod pattern of an obligate biped.'
        },
        {
          label: 'Known size',
          value: 'about 7–8 m long',
          level: 'Based on one individual',
          reason: 'Only the holotype is known, so the size range and maximum size of the species cannot be assessed.'
        },
        {
          label: 'Appearance',
          value: 'Skeletal outline well supported',
          level: 'Soft tissues remain reconstructed',
          reason: 'Skull shape, limb proportions and body length are constrained by the bones; skin texture and colour are unknown.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Middle Jurassic (Bathonian–Oxfordian)' },
        { label: 'Approximate age', value: 'about 168–161 million years ago' },
        { label: 'Rock unit', value: 'Tiourarén Formation' },
        { label: 'Type locality', value: 'In Abaka, Agadez region, Niger' }
      ],
      locality: {
        name: 'In Abaka',
        region: 'Agadez region, Niger',
        note: 'Tiourarén Formation. The map shows a country-level reference because exact site coordinates are not plotted.'
      },
      classificationSummary: 'Afrovenator is a megalosaurid theropod, usually placed in the subfamily Afrovenatorinae alongside Dubreuillosaurus, Magnosaurus and Eustreptospondylus. Its exact position within Megalosauridae varies between analyses.',
      related: [
        { id: 'eustreptospondylus', reason: 'Compare with a European afrovenatorine known from a single partial skeleton.' },
        { id: 'dubreuillosaurus', reason: 'Compare with a smaller French megalosaurid of similar age.' },
        { id: 'torvosaurus', reason: 'Compare with a larger, more robust megalosaurid from the Late Jurassic.' }
      ],
      questions: [
        {
          title: 'How old are the rocks?',
          copy: 'The Tiourarén Formation lacks a direct radiometric date. The late Middle Jurassic age rests on faunal comparison and could shift with new dating.'
        },
        {
          title: 'How variable was the species?',
          copy: 'One individual cannot show growth stages, sexual variation or the full size range of Afrovenator.'
        },
        {
          title: 'Where does it sit among megalosaurids?',
          copy: 'It is consistently a megalosaurid, but its relationships to Eustreptospondylus and other afrovenatorines change between analyses.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'The profile follows the late Middle Jurassic interpretation of the Tiourarén Formation. PBDB spans a broader interval because its occurrence set includes records and formation assignments with different age resolutions.',
    sources: [
      { type: 'original-description', citation: 'Sereno et al. (1994), Early Cretaceous dinosaurs from the Sahara', url: 'https://doi.org/10.1126/science.266.5183.267' },
      { type: 'stratigraphic-reassessment', citation: 'Rauhut & López-Arbarello (2009), Considerations on the age of the Tiouaren Formation', url: 'https://doi.org/10.1016/j.palaeo.2008.10.019' },
      { type: 'systematic-revision', citation: 'Carrano, Benson & Sampson (2012), The phylogeny of Tetanurae', url: 'https://doi.org/10.1080/14772019.2011.630927' }
    ],
    residualUncertainty: [
      'The formation lacks a direct radiometric date.',
      'Only one principal skeleton is known.',
      'Exact placement within Megalosauridae varies among analyses.'
    ],
    evidence: {
      score: 72,
      summary: 'One relatively complete partial skeleton preserves substantial cranial and postcranial anatomy, but not a complete individual.',
      material: 'Holotype MNN TIG1: partial skull, vertebral elements, forelimbs and hands, much of the pelvis and most of the hind limbs.',
      formations: 'Tiouraren Formation, Niger.',
      confidenceLimit: 'Anatomy is well sampled for one individual; population variation, maximum size and the formation age remain uncertain.',
      sourceBasis: 'Sereno et al. 1994, Rauhut & Lopez-Arbarello 2009 and Carrano et al. 2012.',
      uncertainties: ['one principal individual', 'formation age', 'megalosaurid position'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'One partial skeleton with much of the skull, arms, hips and legs.',
        standfirst: 'Afrovenator is known from a single individual, the holotype MNN TIG1, which preserves substantial cranial and postcranial material. It is one of the better-represented Jurassic theropods from Africa, but it is still a single, incomplete animal.',
        coverage: {
          label: 'Good',
          level: 3,
          maximum: 4,
          basis: 'Skull, forelimbs, pelvis and hindlimbs are well represented in one associated skeleton; the vertebral column is incomplete and no second individual is known.'
        },
        metrics: [
          { label: 'Known remains', value: 'Partial skull and skeleton' },
          { label: 'Individuals', value: '1' },
          { label: 'Key limitation', value: 'Single individual, incomplete spine' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'The holotype includes much of the skull and lower jaw with teeth, a series of vertebrae, both forelimbs with nearly complete hands, much of the pelvis, and most of both hindlimbs.',
          note: 'Because only one skeleton is known, everything said about the species rests on that individual, and the age of the rocks that contained it has itself been revised.'
        },
        media: [
          {
            file: 'Afrovenator skeleton.jpg',
            kind: 'Known-material diagram',
            title: 'Skeletal reconstruction showing preserved bones',
            alt: 'Skeletal diagram of Afrovenator abakensis with known bones indicated',
            caption: 'A skeletal reconstruction based on the holotype; it is a diagram of what the bones imply, not a photograph of a mounted skeleton.',
            credit: 'Jaime Headden · CC BY 3.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Afrovenator_skeleton.jpg'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Much of the skull roof, snout and braincase region, lower jaw elements and teeth.' },
          { label: 'Vertebral column', value: 'Cervical, dorsal and caudal vertebrae, incomplete as a series; ribs.' },
          { label: 'Girdles and limbs', value: 'Both forelimbs including nearly complete hands, much of the pelvis, and femora, tibiae, fibulae and feet.' },
          { label: 'Exceptional preservation', value: 'None reported. No skin, feathers, colour or gut contents are known.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'MNN TIG1 · holotype',
            description: 'A partial skull and associated skeleton, originally catalogued as UC OBA 1 at the University of Chicago and now held in Niger. It remains the only specimen confidently referred to the genus.',
            meta: 'In Abaka · Tiourarén Formation · Musée National du Niger'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'One associated partial skull and skeleton with well-preserved forelimbs, pelvis and hindlimbs.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A large megalosaurid predator whose presence in Niger shows that this group ranged across Jurassic Gondwana as well as Europe.'
          },
          {
            label: 'Still unknown',
            value: 'Growth series, size range, population variation, external soft tissues, and a precise numerical age for the formation.'
          }
        ],
        resources: [
          {
            type: 'Primary description',
            title: 'Sereno et al. · 1994',
            description: 'Original naming and description of the holotype, then interpreted as Early Cretaceous.',
            access: 'DOI record',
            url: 'https://doi.org/10.1126/science.266.5183.267'
          },
          {
            type: 'Age reassessment',
            title: 'Rauhut & López-Arbarello · 2009',
            description: 'Argument that the Tiourarén Formation is late Middle Jurassic rather than Early Cretaceous.',
            access: 'DOI record',
            url: 'https://doi.org/10.1016/j.palaeo.2008.10.019'
          },
          {
            type: 'Systematic revision',
            title: 'Carrano, Benson & Sampson · 2012',
            description: 'Comprehensive tetanuran phylogeny placing Afrovenator within Megalosauridae.',
            access: 'DOI record',
            url: 'https://doi.org/10.1080/14772019.2011.630927'
          },
          {
            type: 'Evidence image',
            title: 'Skeletal reconstruction',
            description: 'Source page, creator details and reuse licence for the skeletal diagram.',
            access: 'CC BY 3.0',
            url: 'https://commons.wikimedia.org/wiki/File:Afrovenator_skeleton.jpg'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=56398'
          }
        ],
        limitations: 'The coverage band describes the single holotype skeleton. It is an editorial evidence summary, not a published completeness percentage.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  alamosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and classification',
      'geological age and geographic range',
      'type and referred skeletal material',
      'body-size uncertainty',
      'osteoderm evidence',
      'profile narrative and uncertainty wording'
    ],
    record: {
      period: 'Late Cretaceous',
      mya: 'about 72–66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Neosauropoda', 'Macronaria', 'Titanosauriformes', 'Titanosauria', 'Lithostrotia'],
      description: 'Alamosaurus sanjuanensis was a titanosaurian sauropod from Maastrichtian rocks of the south-western United States. The name is founded on an isolated shoulder blade. Many partial skeletons, vertebrae and limb bones have historically been referred to it, but the extent of that referred material is now under renewed taxonomic debate. It is one of the youngest named sauropods from North America, not the continent\'s only Late Cretaceous sauropod occurrence.',
      facts: [
        'The holotype USNM 10486 is a left scapula; an ischium found nearby, USNM 10487, is the paratype.',
        'USNM 15560 from Utah was long treated as an incomplete referred Alamosaurus skeleton; a 2025 paper proposed separating it as Utetitan zellaguymondeweyae, a proposal not yet established as broad consensus.',
        'BIBE 45854 from Texas preserves an articulated cervical series historically referred to Alamosaurus; the same 2025 revision questioned how much of the Texas material belongs to the type species.',
        'Some fragmentary bones indicate very large adults, but precise maximum length and mass remain uncertain because no giant individual is represented by a complete skeleton.',
        'Osteoderm fragments associated with referred material show that at least some individuals carried bony skin deposits; their arrangement over the body is unknown.'
      ]
    },
    presentation: {
      heroLead: 'One of the last North American sauropods, named from a shoulder blade but known from many partial skeletons whose assignment is now being re-examined.',
      heroMedia: {
        file: 'Alamosaurus sanjuanensis life restoration.jpg',
        title: 'Life restoration of Alamosaurus sanjuanensis',
        alt: 'Life restoration of the titanosaur Alamosaurus sanjuanensis in side view',
        caption: 'Life restoration based on a published skeletal reconstruction. Osteoderm placement, skin and colour are interpretive.',
        credit: 'Anonymous Dinonerd · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alamosaurus_sanjuanensis_life_restoration.jpg'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Cretaceous · about 72–66 Ma' },
        { label: 'Location', value: 'New Mexico, Utah and Texas, USA' },
        { label: 'Known size', value: 'very large · maximum uncertain' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Alamosaurus was a giant long-necked plant-eater that lived in the American south-west during the final few million years of the age of dinosaurs. It shared its landscape with Tyrannosaurus and was among the last sauropods anywhere on Earth.',
        'Its body plan was that of a titanosaur: a long neck, a deep body carried on column-like limbs, and at least some bony plates set into the skin. Fragmentary bones from Texas suggest that mature animals rivalled the largest known sauropods, but no giant individual is preserved well enough to measure directly.',
        'Sauropods had been absent from North America for tens of millions of years before Alamosaurus appears. It is usually interpreted as an immigrant from South America, although the details of that dispersal, and how many titanosaur species the south-western material really represents, remain open questions.'
      ],
      animalHighlights: [
        'A long-necked titanosaur with column-like limbs and a deep, broad body.',
        'Osteoderm fragments show that at least some individuals carried bony deposits in the skin.',
        'Among the youngest sauropods known, surviving to the end of the Cretaceous alongside Tyrannosaurus.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Plant-eater',
          level: 'Supported by body plan and teeth',
          reason: 'Titanosaur teeth and the long neck are consistent with browsing; the exact plants eaten are not preserved.'
        },
        {
          label: 'Movement',
          value: 'Quadrupedal',
          level: 'Supported by limb and girdle bones',
          reason: 'Robust, columnar limbs and a wide-set stance show habitual four-legged walking.'
        },
        {
          label: 'Known size',
          value: 'possibly 25–30 m',
          level: 'Extrapolated from fragments',
          reason: 'The largest bones are isolated. Complete referred skeletons belong to smaller, partly immature animals.'
        },
        {
          label: 'Appearance',
          value: 'Body plan secure',
          level: 'Armour and skull reconstructed',
          reason: 'The skull is poorly known and the arrangement of osteoderms over the body has not been observed.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Cretaceous (Maastrichtian)' },
        { label: 'Approximate age', value: 'about 72–66 million years ago' },
        { label: 'Rock unit', value: 'Ojo Alamo Formation (type); North Horn and Javelina formations (referred)' },
        { label: 'Type locality', value: 'San Juan Basin, New Mexico, USA' }
      ],
      locality: {
        name: 'San Juan Basin',
        region: 'San Juan County, New Mexico, USA',
        note: 'Ojo Alamo Formation. Referred material comes from Utah and Texas; the map shows a regional reference because exact quarry coordinates are not plotted.'
      },
      classificationSummary: 'Alamosaurus is a lithostrotian titanosaur. It is often recovered close to the South American saltasaurids or to Opisthocoelicaudia from Mongolia, but its precise position within Titanosauria varies among analyses.',
      related: [
        { id: 'saltasaurus', reason: 'Compare with an armoured South American titanosaur of similar age.' },
        { id: 'opisthocoelicaudia', reason: 'Compare with an Asian titanosaur sometimes recovered as a close relative.' },
        { id: 'tyrannosaurus', reason: 'The giant predator that shared its landscape at the end of the Cretaceous.' }
      ],
      questions: [
        {
          title: 'How much referred material is really Alamosaurus?',
          copy: 'The holotype is one scapula. A 2025 proposal to separate the Utah skeleton as Utetitan shows that the limits of the species are still being tested.'
        },
        {
          title: 'How big did it get?',
          copy: 'Isolated giant bones from Texas imply very large adults, but no such individual is preserved as a measurable skeleton.'
        },
        {
          title: 'Where did it come from?',
          copy: 'Alamosaurus is usually treated as an immigrant from South America, but the route and timing of that dispersal are not directly documented.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'Secure and widely accepted records are Maastrichtian. Some older south-western North American sauropod material has been referred to Alamosaurus, but those referrals should not extend the headline range without specimen-level review.',
    sources: [
      { type: 'validity-and-anatomy', citation: 'D\'Emic et al. (2011), A sauropod dinosaur pes and the validity of Alamosaurus sanjuanensis', url: 'https://doi.org/10.1080/02724634.2011.595856' },
      { type: 'systematic-anatomy', citation: 'Tykoski & Fiorillo (2017), An articulated cervical series of Alamosaurus sanjuanensis', url: 'https://doi.org/10.1080/14772019.2016.1183150' },
      { type: 'integument', citation: 'Carrano & D\'Emic (2015), Osteoderms of Alamosaurus sanjuanensis', url: 'https://doi.org/10.1080/02724634.2014.901334' },
      { type: 'recent-taxonomic-proposal', citation: 'Paul (2025), Evidence for multiple south-western North American titanosaur taxa', url: 'https://giw.utahgeology.org/giw/index.php/GIW/article/view/156' }
    ],
    residualUncertainty: [
      'Many referrals are isolated and cannot all be compared directly with the type specimen.',
      'The proposed separation of Utetitan is recent and has not yet been tested widely in subsequent phylogenetic work.',
      'Maximum adult size is extrapolated from incomplete individuals.',
      'The distribution and external appearance of the osteoderms are unknown.',
      'Precise relationships within derived Titanosauria vary among analyses.'
    ],
    evidence: {
      score: 63,
      summary: 'Many partial and isolated bones document the genus historically, but the name-bearing specimen is only a scapula and major referrals are under renewed review.',
      material: 'Holotype scapula, paratype ischium and historically referred vertebral, girdle, limb and osteoderm material from several individuals.',
      formations: 'Ojo Alamo Formation and other Maastrichtian units of the south-western United States, with referrals of unequal security.',
      confidenceLimit: 'The overall titanosaur body plan is secure, while maximum size and the amount of referred material belonging to the type species remain uncertain.',
      sourceBasis: 'D\'Emic et al. 2011, Carrano & D\'Emic 2015, Tykoski & Fiorillo 2017 and Paul 2025.',
      uncertainties: ['referred-material limits', 'Utetitan proposal', 'maximum size', 'osteoderm arrangement'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'A shoulder blade names the species; many partial skeletons fill it in.',
        standfirst: 'Alamosaurus is anchored by an isolated scapula from New Mexico. Its familiar image rests on partial skeletons, an articulated neck and giant isolated bones from Utah and Texas that have historically been referred to it, and whose assignment is now under renewed review.',
        coverage: {
          label: 'Moderate',
          level: 3,
          maximum: 4,
          basis: 'Taken together, the referred material covers most of the skeleton apart from much of the skull, but it comes from several individuals and localities, and the amount that belongs with the type specimen is debated.'
        },
        metrics: [
          { label: 'Known remains', value: 'Composite from several skeletons' },
          { label: 'Individuals', value: 'Many, across three states' },
          { label: 'Key limitation', value: 'Holotype is a single scapula' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'The type material is a left scapula and a nearby ischium. Referred specimens add vertebrae including an articulated cervical series, girdle and limb bones, a juvenile skeleton, a foot, and osteoderm fragments; skull material is very limited.',
          note: 'Because the holotype is so incomplete, referrals depend on overlapping bones and geography rather than direct comparison, which is why the limits of the species are contested.'
        },
        media: [
          {
            file: 'Alamosaurus sanjuanensis paratype ischium.jpg',
            kind: 'Type material',
            title: 'Paratype ischium USNM 10487',
            alt: 'Published figure of the Alamosaurus sanjuanensis paratype ischium',
            caption: 'Gilmore\'s original figure of the paratype ischium, found near the holotype scapula. The two bones are the only type material of the species.',
            credit: 'Charles W. Gilmore · public domain',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alamosaurus_sanjuanensis_paratype_ischium.jpg'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Very limited; isolated teeth and fragmentary cranial elements have been referred, but no substantially complete skull is known.' },
          { label: 'Vertebral column', value: 'Cervical, dorsal, sacral and caudal vertebrae from several individuals, including an articulated cervical series from Texas (BIBE 45854).' },
          { label: 'Girdles and limbs', value: 'Holotype scapula and paratype ischium; referred pelvic and limb bones, a partial foot, and the incomplete Utah skeleton USNM 15560.' },
          { label: 'Exceptional preservation', value: 'Osteoderm fragments show bony skin deposits in at least some individuals; no skin impressions, colour or gut contents are known.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'USNM 10486 · holotype',
            description: 'A left scapula collected from the Ojo Alamo Formation in the San Juan Basin and described by Gilmore in 1922. USNM 10487, an ischium found nearby, is the paratype.',
            meta: 'San Juan Basin · Ojo Alamo Formation · Smithsonian National Museum of Natural History'
          },
          {
            kicker: 'Referred material',
            title: 'Utah and Texas skeletons',
            description: 'USNM 15560 from the North Horn Formation of Utah and the articulated neck BIBE 45854 from Big Bend, Texas, supply most of what is known of the animal. A 2025 paper proposed separating the Utah skeleton as Utetitan.',
            meta: 'Several localities · assignment to the type species under review'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'A scapula and ischium from New Mexico, plus partial skeletons, vertebrae, limb bones and osteoderms historically referred from Utah and Texas.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A large lithostrotian titanosaur representing the return of sauropods to North America at the end of the Cretaceous.'
          },
          {
            label: 'Still unknown',
            value: 'The skull, maximum adult size, osteoderm arrangement, and how many species the south-western material contains.'
          }
        ],
        resources: [
          {
            type: 'Validity and anatomy',
            title: 'D\'Emic et al. · 2011',
            description: 'Description of a sauropod pes and reassessment of the validity of Alamosaurus sanjuanensis.',
            access: 'DOI record',
            url: 'https://doi.org/10.1080/02724634.2011.595856'
          },
          {
            type: 'Cervical series',
            title: 'Tykoski & Fiorillo · 2017',
            description: 'Description of the articulated neck BIBE 45854 from Big Bend National Park.',
            access: 'DOI record',
            url: 'https://doi.org/10.1080/14772019.2016.1183150'
          },
          {
            type: 'Osteoderms',
            title: 'Carrano & D\'Emic · 2015',
            description: 'Description of osteoderms associated with referred Alamosaurus material.',
            access: 'DOI record',
            url: 'https://doi.org/10.1080/02724634.2014.901334'
          },
          {
            type: 'Taxonomic proposal',
            title: 'Paul · 2025',
            description: 'Argument for multiple titanosaur taxa in the south-western United States, including Utetitan.',
            access: 'Read online',
            url: 'https://giw.utahgeology.org/giw/index.php/GIW/article/view/156'
          },
          {
            type: 'Evidence image',
            title: 'Paratype ischium figure',
            description: 'Source page and reuse terms for Gilmore\'s figure of the paratype.',
            access: 'Public domain',
            url: 'https://commons.wikimedia.org/wiki/File:Alamosaurus_sanjuanensis_paratype_ischium.jpg'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38683'
          }
        ],
        limitations: 'The coverage band combines type and historically referred material at genus level. Because referrals are contested, it should be read as an upper estimate rather than a secure measure.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  ammosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'name validity and synonymy',
      'geological age and formation',
      'name-bearing and referred material',
      'classification',
      'profile narrative and uncertainty wording'
    ],
    record: {
      period: 'Early Jurassic',
      mya: 'about 201–190 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Anchisauria', 'Anchisaurus'],
      taxonomicStatus: 'junior synonym of Anchisaurus polyzelus',
      acceptedName: false,
      description: 'Ammosaurus major is a historical name for Early Jurassic sauropodomorph material from the Portland Formation of Connecticut. Detailed revision found its type and the other Manchester quarry skeletons to belong to Anchisaurus polyzelus, making Ammosaurus a junior subjective synonym rather than a separate accepted genus.',
      facts: [
        'Marsh named the material Anchisaurus major in 1889 and erected Ammosaurus for it in 1891.',
        'Yates\'s 2010 revision found the Manchester skeletons conspecific and referred them to the older name Anchisaurus polyzelus.',
        'The International Commission on Zoological Nomenclature designated the almost complete YPM 1883 skeleton as the neotype of Anchisaurus polyzelus in 2015, stabilising that name.',
        'This page is retained to explain the historical name and should not be counted as a separate valid dinosaur genus.'
      ]
    },
    presentation: {
      heroLead: 'A historical name for Connecticut sauropodomorph skeletons that are now assigned to Anchisaurus; retained here to explain the name, not as a separate genus.',
      heroMedia: {
        file: 'Anchisaurus NT.jpg',
        title: 'Life restoration of Anchisaurus polyzelus',
        alt: 'Life restoration of the early sauropodomorph Anchisaurus polyzelus',
        caption: 'Life restoration of Anchisaurus, the accepted name for the Ammosaurus material. Soft tissues and colour are interpretive.',
        credit: 'Nobu Tamura · CC BY-SA 3.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anchisaurus_NT.jpg'
      },
      quickFacts: [
        { label: 'Age', value: 'Early Jurassic · about 201–190 Ma' },
        { label: 'Location', value: 'Connecticut, USA' },
        { label: 'Status', value: 'Junior synonym of Anchisaurus' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Ammosaurus is not, by current understanding, a distinct animal. The name was given by Othniel Marsh in 1891 to the rear half of a sauropodomorph skeleton quarried at Manchester, Connecticut, whose front half had already been built into a bridge. Detailed revision has since shown that this skeleton and the other Manchester specimens belong to the same species as Anchisaurus polyzelus.',
        'The animal those bones represent was a small, lightly built early sauropodomorph, a few metres long, with a slender neck, a small head and grasping hands. It walked mainly on two legs but could probably drop onto all fours, and it fed on plants, though its blunt teeth have led some to suggest a mixed diet.',
        'The Manchester skeletons remain scientifically valuable because they are among the most complete early sauropodomorphs from North America. This page keeps the historical name so that older references make sense; the current science lives under Anchisaurus.'
      ],
      animalHighlights: [
        'The name rests on the rear half of a skeleton whose front half was lost during bridge construction.',
        'Revision in 2004 and 2010 found the Manchester skeletons to be one species, Anchisaurus polyzelus.',
        'A 2015 ruling of the International Commission on Zoological Nomenclature fixed YPM 1883 as the neotype of Anchisaurus, stabilising the accepted name.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Plant-eater',
          level: 'Supported by teeth and jaws',
          reason: 'Leaf-shaped teeth are consistent with herbivory; some authors have argued for occasional animal food. No gut contents are known.'
        },
        {
          label: 'Movement',
          value: 'Mostly bipedal',
          level: 'Could also walk on all fours',
          reason: 'Hindlimbs and hands preserved in the Manchester material suggest habitual bipedality with facultative quadrupedal walking.'
        },
        {
          label: 'Known size',
          value: 'about 2–3 m long',
          level: 'From several partial skeletons',
          reason: 'The Manchester specimens are small; whether they were fully grown remains debated.'
        },
        {
          label: 'Appearance',
          value: 'Skeletal outline supported',
          level: 'Soft tissues remain reconstructed',
          reason: 'Proportions follow the Manchester skeletons; skin and colour are unknown.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Early Jurassic' },
        { label: 'Approximate age', value: 'about 201–190 million years ago' },
        { label: 'Rock unit', value: 'Portland Formation' },
        { label: 'Type locality', value: 'Wolcott\'s Quarry, Manchester, Connecticut, USA' }
      ],
      locality: {
        name: 'Wolcott\'s Quarry',
        region: 'Manchester, Connecticut, USA',
        note: 'Portland Formation, Hartford Basin. The map shows a state-level reference because exact quarry coordinates are not plotted.'
      },
      classificationSummary: 'The material called Ammosaurus is now referred to Anchisaurus polyzelus, an early sauropodomorph near the origin of Sauropoda. Anchisaurus itself is variously recovered as a basal sauropod or as a close sauropod relative outside that clade.',
      related: [
        { id: 'anchisaurus', reason: 'The accepted name for the same Manchester quarry material.' },
        { id: 'massospondylus', reason: 'Compare with a more completely known Early Jurassic sauropodomorph.' },
        { id: 'plateosaurus', reason: 'Compare with a larger, earlier sauropodomorph known from many skeletons.' }
      ],
      questions: [
        {
          title: 'Why keep the name at all?',
          copy: 'Ammosaurus appears throughout older literature and museum labels. The entry explains what the name referred to and where the material now sits.'
        },
        {
          title: 'Could Ammosaurus be resurrected?',
          copy: 'Synonymy is a scientific judgement. New material or analysis could reopen the question, but current consensus treats the Manchester skeletons as one species.'
        },
        {
          title: 'Is Anchisaurus a sauropod?',
          copy: 'Analyses disagree on whether Anchisaurus falls just inside or just outside Sauropoda, which matters for the timing of sauropod origins.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'The reviewed range follows the Early Jurassic Portland Formation material on which Ammosaurus and Anchisaurus were based. Broader records assigned to the historical name should not be treated as proof of a longer-lived separate genus.',
    sources: [
      { type: 'systematic-revision', citation: 'Yates (2004), Anchisaurus polyzelus and the evolution of gigantism among sauropodomorph dinosaurs', url: 'https://elischolar.library.yale.edu/peabody_museum_natural_history_postilla/230/' },
      { type: 'systematic-revision', citation: 'Yates (2010), Revision of the Manchester sauropodomorphs and status of Anchisaurus', url: 'https://doi.org/10.1111/j.1475-4983.2010.00952.x' },
      { type: 'nomenclatural-ruling', citation: 'ICZN (2015), Opinion 2361: usage of Anchisaurus conserved by designation of a neotype', url: 'https://www.biotaxa.org/bzn/article/view/37953' }
    ],
    residualUncertainty: [
      'Junior synonymy is a taxonomic conclusion rather than an objective identity between the original name-bearing specimens.',
      'The exact position of Anchisaurus near the origin of Sauropoda differs among phylogenetic analyses.'
    ],
    evidence: {
      score: 76,
      summary: 'Substantial Early Jurassic skeletons are known, but they support the accepted name Anchisaurus rather than a separate genus Ammosaurus.',
      material: 'Historical Manchester quarry sauropodomorph skeletons, including the nearly complete YPM 1883 neotype of Anchisaurus.',
      formations: 'Portland Formation, Connecticut, USA.',
      confidenceLimit: 'The anatomy is comparatively well documented; the uncertainty concerns nomenclature and early sauropodomorph relationships, not whether the fossils exist.',
      sourceBasis: 'Yates 2004/2010 and ICZN Opinion 2361.',
      uncertainties: ['subjective synonymy', 'early sauropodomorph position'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'The back half of a skeleton, and a name that no longer stands alone.',
        standfirst: 'The Ammosaurus holotype is the rear half of a small sauropodomorph from Manchester, Connecticut. Together with the other Manchester skeletons, now referred to Anchisaurus polyzelus, it forms one of the better early sauropodomorph records in North America.',
        coverage: {
          label: 'Good (as Anchisaurus)',
          level: 3,
          maximum: 4,
          basis: 'Combined Manchester material includes a nearly complete skeleton, but the Ammosaurus holotype itself lacks the skull and forequarters, and the name is a junior synonym.'
        },
        metrics: [
          { label: 'Known remains', value: 'Partial skeletons' },
          { label: 'Individuals', value: 'Several (Manchester quarry)' },
          { label: 'Key limitation', value: 'Name is a junior synonym' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'The holotype YPM 208 preserves the pelvis, sacrum, hindlimbs and tail region. Other Manchester specimens, including the nearly complete YPM 1883 that is now the neotype of Anchisaurus, add the skull, neck, forelimbs and trunk.',
          note: 'The front half of the holotype skeleton was incorporated into a bridge abutment and only partly recovered decades later, so the type specimen is permanently incomplete.'
        },
        media: [
          {
            file: 'Ammosaurus skeleton Huene.png',
            kind: 'Historical specimen figure',
            title: 'Von Huene\'s figure of the Ammosaurus major holotype',
            alt: 'Early twentieth-century plate showing the preserved hindquarters of Ammosaurus major',
            caption: 'Friedrich von Huene\'s plate of the holotype hindquarters. It records what was preserved a century ago and is not a life reconstruction.',
            credit: 'Friedrich von Huene · public domain',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ammosaurus_skeleton_Huene.png'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Absent from the Ammosaurus holotype; known from other Manchester specimens referred to Anchisaurus.' },
          { label: 'Vertebral column', value: 'Sacrum and posterior dorsal and caudal vertebrae in the holotype; more complete series in referred Manchester skeletons.' },
          { label: 'Girdles and limbs', value: 'Pelvis and hindlimbs including the feet in the holotype; forelimbs known from referred material.' },
          { label: 'Exceptional preservation', value: 'None reported. No skin, colour or gut contents are known.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'YPM 208 · holotype of Ammosaurus major',
            description: 'The posterior half of a skeleton from Wolcott\'s Quarry, Manchester. Marsh described it as Anchisaurus major in 1889 and made it the type of Ammosaurus in 1891.',
            meta: 'Manchester, Connecticut · Portland Formation · Yale Peabody Museum'
          },
          {
            kicker: 'Neotype of the accepted name',
            title: 'YPM 1883 · Anchisaurus polyzelus',
            description: 'An almost complete skeleton from the same quarry, designated neotype of Anchisaurus polyzelus by the ICZN in 2015. It is the reference specimen for the species to which the Ammosaurus material is now referred.',
            meta: 'Same quarry · basis of current usage'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'The hindquarters of one skeleton, plus several other partial skeletons from the same Connecticut quarry.'
          },
          {
            label: 'Scientific interpretation',
            value: 'All the Manchester sauropodomorphs represent a single species, Anchisaurus polyzelus, making Ammosaurus a junior subjective synonym.'
          },
          {
            label: 'Still unknown',
            value: 'Whether the Manchester animals were fully grown, the exact position of Anchisaurus relative to Sauropoda, and all soft-tissue features.'
          }
        ],
        resources: [
          {
            type: 'Systematic revision',
            title: 'Yates · 2004',
            description: 'Reassessment of Anchisaurus polyzelus and the Manchester material.',
            access: 'Read online',
            url: 'https://elischolar.library.yale.edu/peabody_museum_natural_history_postilla/230/'
          },
          {
            type: 'Systematic revision',
            title: 'Yates · 2010',
            description: 'Revision concluding that Ammosaurus is a junior synonym of Anchisaurus.',
            access: 'DOI record',
            url: 'https://doi.org/10.1111/j.1475-4983.2010.00952.x'
          },
          {
            type: 'Nomenclatural ruling',
            title: 'ICZN Opinion 2361 · 2015',
            description: 'Designation of YPM 1883 as neotype, conserving the name Anchisaurus.',
            access: 'Read online',
            url: 'https://www.biotaxa.org/bzn/article/view/37953'
          },
          {
            type: 'Evidence image',
            title: 'Von Huene plate',
            description: 'Source page and reuse terms for the historical figure of the holotype.',
            access: 'Public domain',
            url: 'https://commons.wikimedia.org/wiki/File:Ammosaurus_skeleton_Huene.png'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context under the accepted name.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38637'
          }
        ],
        limitations: 'The coverage band reflects the combined Manchester material now assigned to Anchisaurus. Ammosaurus is retained as a historical name and is not counted as a separate valid genus.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  ampelosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and classification',
      'geological age and type locality',
      'known skeletal and osteoderm material',
      'body-size confidence',
      'profile narrative and uncertainty wording'
    ],
    record: {
      period: 'Late Cretaceous',
      mya: 'early Maastrichtian, about 71.5 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Neosauropoda', 'Macronaria', 'Titanosauriformes', 'Titanosauria', 'Lithostrotia', 'Lirainosaurinae'],
      description: 'Ampelosaurus atacis was an early Maastrichtian titanosaur from the Bellevue bonebed in southern France. The holotype is three connected dorsal vertebrae, while abundant referred material includes other vertebrae, girdle and limb bones, teeth and several forms of osteoderm. The bonebed contains multiple individuals, but not every titanosaur bone from Bellevue can automatically be assigned to Ampelosaurus.',
      facts: [
        'The holotype MDE C3-247 consists of three connected middle dorsal vertebrae from the Bellevue locality.',
        'The original diagnosis also drew on abundant disarticulated postcranial bones and plate-, bulb- and spine-shaped osteoderms.',
        'The site preserves many individuals rather than one complete skeleton; later work has cautioned that more than one titanosaur morphotype may be present.',
        'Bone histology shows prolonged growth and extensive remodelling, while exact adult size estimates remain dependent on associating isolated limb bones correctly.',
        'Ampelosaurus is usually recovered among European lithostrotian titanosaurs, commonly within Lirainosaurinae.'
      ]
    },
    presentation: {
      heroLead: 'A French titanosaur from a rich bonebed, known from hundreds of bones and several kinds of bony armour, but not from a single complete skeleton.',
      heroMedia: {
        file: 'AmpelosaurusDB.jpg',
        title: 'Life restoration of Ampelosaurus atacis',
        alt: 'Life restoration of the titanosaur Ampelosaurus atacis in side view',
        caption: 'Life restoration by Dmitry Bogdanov. The arrangement of the osteoderms is hypothetical; only their shapes are known.',
        credit: 'Dmitry Bogdanov · public domain',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:AmpelosaurusDB.jpg'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Cretaceous · about 71.5 Ma' },
        { label: 'Location', value: 'Aude, southern France' },
        { label: 'Known size', value: 'about 15 m · estimate' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Ampelosaurus was a medium-sized titanosaur that lived in southern France around 71 million years ago, when much of Europe was an archipelago of islands. It had the classic sauropod build of a long neck and tail, a deep body and pillar-like legs, and its skin was studded with bony osteoderms of several shapes.',
        'It is known from the Bellevue bonebed near Campagne-sur-Aude, where hundreds of bones from many individuals accumulated. Vertebrae, girdle bones, limb bones, teeth and osteoderms are all represented, and cranial material including a braincase has been attributed to the genus.',
        'The wealth of material makes Ampelosaurus one of the best-sampled European titanosaurs, but the bones are disarticulated and may not all belong to one species. Bone histology shows slow, prolonged growth, and mature size remains an estimate that depends on which isolated limb bones are associated together.'
      ],
      animalHighlights: [
        'Hundreds of bones from the Bellevue bonebed document most regions of the skeleton.',
        'Plate-, bulb- and spine-shaped osteoderms show that the skin carried bony armour of more than one form.',
        'Bone microstructure records slow, extended growth compared with many other sauropods.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Plant-eater',
          level: 'Supported by teeth and body plan',
          reason: 'Slender, peg-like teeth and the long neck fit a browsing herbivore. The specific plants eaten are not preserved.'
        },
        {
          label: 'Movement',
          value: 'Quadrupedal',
          level: 'Supported by limb bones',
          reason: 'Robust, columnar limb bones show habitual four-legged walking.'
        },
        {
          label: 'Known size',
          value: 'about 15 m long',
          level: 'Estimate from disarticulated bones',
          reason: 'No single individual is complete, so length is reconstructed from separately found limb and vertebral elements.'
        },
        {
          label: 'Appearance',
          value: 'Armoured skin confirmed',
          level: 'Arrangement unknown',
          reason: 'Osteoderm shapes are known, but none has been found in place on the body, so their layout is reconstructed.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Cretaceous (early Maastrichtian)' },
        { label: 'Approximate age', value: 'about 71.5 million years ago' },
        { label: 'Rock unit', value: 'Marnes Rouges Inférieures Formation' },
        { label: 'Type locality', value: 'Bellevue, Campagne-sur-Aude, Aude, France' }
      ],
      locality: {
        name: 'Bellevue',
        region: 'Campagne-sur-Aude, Aude, France',
        note: 'Marnes Rouges Inférieures Formation, Upper Aude Valley. The map shows a regional reference because exact bonebed coordinates are not plotted.'
      },
      classificationSummary: 'Ampelosaurus is a lithostrotian titanosaur, usually placed among the European forms grouped as Lirainosaurinae. Its exact relationships within Lithostrotia vary among analyses.',
      related: [
        { id: 'magyarosaurus', reason: 'Compare with a dwarfed island titanosaur from Romania.' },
        { id: 'saltasaurus', reason: 'Compare with an armoured South American titanosaur of similar age.' },
        { id: 'alamosaurus', reason: 'Compare with a North American titanosaur that also carried osteoderms.' }
      ],
      questions: [
        {
          title: 'Is there more than one titanosaur at Bellevue?',
          copy: 'Later studies have suggested that the bonebed may contain a second morphotype, so not every bone can be assumed to be Ampelosaurus.'
        },
        {
          title: 'Which bones belonged together?',
          copy: 'The bones are disarticulated and come from many individuals. Reconstructing one animal means associating elements that were not found connected.'
        },
        {
          title: 'How were the osteoderms arranged?',
          copy: 'Several osteoderm shapes are known, but their positions on the body have not been observed and remain reconstructed.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'The headline age is restricted to the early Maastrichtian Bellevue type locality. Wider French and Spanish referrals need specimen-level taxonomic review and should not silently extend the range of the genus.',
    sources: [
      { type: 'original-description', citation: 'Le Loeuff (1995), Ampelosaurus atacis, a new titanosaur from the Upper Aude Valley', url: 'https://naturalhistory.si.edu/sites/default/files/media/translated_publications/LeLoeuff_95.pdf' },
      { type: 'histology', citation: 'Klein et al. (2012), Modified laminar bone in Ampelosaurus and other titanosaurs', url: 'https://doi.org/10.1371/journal.pone.0036907' },
      { type: 'chronostratigraphy', citation: 'Fondevilla et al. (2016), Magnetostratigraphy of the Maastrichtian continental record in the Upper Aude Valley', url: 'https://doi.org/10.1016/j.cretres.2015.08.009' }
    ],
    residualUncertainty: [
      'The Bellevue accumulation may include more than one titanosaur taxon.',
      'Many bones are disarticulated, complicating individual and species association.',
      'The full arrangement of osteoderms is unknown.',
      'Precise placement within Lithostrotia varies among analyses.'
    ],
    evidence: {
      score: 68,
      summary: 'A multi-individual bonebed preserves abundant titanosaur material and several osteoderm forms, but it is not one complete skeleton and may include more than one morphotype.',
      material: 'Holotype of three connected dorsal vertebrae plus abundant disarticulated vertebral, girdle, limb, dental and osteoderm material.',
      formations: 'Bellevue locality, Upper Aude Valley, southern France.',
      confidenceLimit: 'Many body regions are represented, while specimen association, maximum size and assignment of every bone to Ampelosaurus remain uncertain.',
      sourceBasis: 'Le Loeuff 1995, Klein et al. 2012 and Fondevilla et al. 2016.',
      uncertainties: ['multi-individual association', 'possible second titanosaur', 'osteoderm arrangement', 'maximum size'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'Three joined vertebrae name the species; a bonebed of many animals fills in the rest.',
        standfirst: 'Ampelosaurus is anchored by three articulated dorsal vertebrae from Bellevue. The same bonebed has yielded hundreds of disarticulated bones, teeth and osteoderms from multiple individuals, which together document most of the skeleton without preserving any single complete animal.',
        coverage: {
          label: 'Moderate',
          level: 3,
          maximum: 4,
          basis: 'Most skeletal regions are represented across the bonebed, but the material is disarticulated, comes from many individuals and may include a second titanosaur.'
        },
        metrics: [
          { label: 'Known remains', value: 'Composite from a bonebed' },
          { label: 'Individuals', value: 'Many' },
          { label: 'Key limitation', value: 'No associated skeleton' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'Vertebrae from the neck, back and tail, girdle and limb bones, teeth, cranial elements including a braincase, and osteoderms of plate, bulb and spine form, all recovered from the Bellevue bonebed.',
          note: 'Because the bones were not found in association, assigning every element to Ampelosaurus, and to a particular individual, depends on interpretation rather than direct observation.'
        },
        media: [
          {
            file: 'Ampelosaurus atacis holotype.jpg',
            kind: 'Type material',
            title: 'Holotype MDE C3-247, three articulated dorsal vertebrae',
            alt: 'Photograph of the three articulated dorsal vertebrae that form the holotype of Ampelosaurus atacis',
            caption: 'The holotype: three connected middle dorsal vertebrae on display at the Musée des Dinosaures, Espéraza.',
            credit: 'Taxon34 · CC BY-SA 4.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ampelosaurus_atacis_holotype.jpg'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Isolated teeth and cranial elements including a braincase attributed to the genus; no complete skull.' },
          { label: 'Vertebral column', value: 'Holotype dorsal series plus numerous cervical, dorsal and caudal vertebrae, ribs and chevrons from other individuals.' },
          { label: 'Girdles and limbs', value: 'Scapulae, pelvic bones, humeri, femora and other limb elements; hand and foot bones are less well represented.' },
          { label: 'Exceptional preservation', value: 'Osteoderms of several shapes and sampled bone histology; no skin impressions, colour or gut contents are known.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'MDE C3-247 · holotype',
            description: 'Three articulated middle dorsal vertebrae from Bellevue, selected by Le Loeuff in 1995 as the type of Ampelosaurus atacis.',
            meta: 'Bellevue · Marnes Rouges Inférieures Formation · Musée des Dinosaures, Espéraza'
          },
          {
            kicker: 'Referred bonebed material',
            title: 'Bellevue assemblage',
            description: 'Hundreds of disarticulated bones, teeth and osteoderms from many individuals excavated since the 1980s. Later work has cautioned that a second titanosaur morphotype may be present in the accumulation.',
            meta: 'One bonebed · many individuals · association reconstructed'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'A holotype of three articulated vertebrae and an abundant, disarticulated multi-individual assemblage from the same site.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A mid-sized armoured lithostrotian titanosaur, one of the best-sampled Late Cretaceous sauropods of the European archipelago.'
          },
          {
            label: 'Still unknown',
            value: 'Which bones belong to which individual, whether all belong to one species, maximum adult size, and the arrangement of the osteoderms.'
          }
        ],
        resources: [
          {
            type: 'Primary description',
            title: 'Le Loeuff · 1995',
            description: 'Original naming and description of Ampelosaurus atacis from the Upper Aude Valley.',
            access: 'Read online',
            url: 'https://naturalhistory.si.edu/sites/default/files/media/translated_publications/LeLoeuff_95.pdf'
          },
          {
            type: 'Histology',
            title: 'Klein et al. · 2012',
            description: 'Bone microstructure showing modified laminar bone and prolonged growth.',
            access: 'DOI record',
            url: 'https://doi.org/10.1371/journal.pone.0036907'
          },
          {
            type: 'Chronostratigraphy',
            title: 'Fondevilla et al. · 2016',
            description: 'Magnetostratigraphic dating of the Maastrichtian record in the Upper Aude Valley.',
            access: 'DOI record',
            url: 'https://doi.org/10.1016/j.cretres.2015.08.009'
          },
          {
            type: 'Evidence image',
            title: 'Holotype photograph',
            description: 'Source page, creator details and reuse licence for the holotype image.',
            access: 'CC BY-SA 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:Ampelosaurus_atacis_holotype.jpg'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=65139'
          }
        ],
        limitations: 'The coverage band describes the combined Bellevue material at genus level. It is an editorial evidence summary, not a published completeness percentage, and it may overstate coverage if a second taxon is present.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  amygdalodon: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and classification',
      'geological age and formation',
      'lectotype and referred material',
      'minimum number of individuals',
      'profile narrative and uncertainty wording'
    ],
    record: {
      period: 'Early Jurassic',
      mya: 'late Toarcian–early Aalenian, about 182–173 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda'],
      length: null,
      massKg: null,
      description: 'Amygdalodon patagonicus is an early sauropod from the Cerro Carnerero Formation of Patagonia, dated from the late Toarcian to early Aalenian across the Early–Middle Jurassic boundary. Its type assemblage is fragmentary and mixed: the sauropod bones represent at least two individuals, and one included element belongs to an indeterminate vertebrate. A posterior dorsal vertebra was selected as the lectotype.',
      facts: [
        'Rauhut\'s 2003 revision showed that the original type material is not a single partial skeleton.',
        'The assemblage contains sauropod bones from at least two individuals plus one bone from another, indeterminate vertebrate.',
        'A posterior dorsal vertebra was designated as the lectotype to anchor the name Amygdalodon patagonicus.',
        'Its position is close to the origin of Eusauropoda: Rauhut placed it within basal Eusauropoda, while the dental phylogeny of Carballido and Pol recovered it just outside that clade.',
        'Amygdalodon is important evidence that early sauropods had reached South America by the Early to early Middle Jurassic.'
      ]
    },
    presentation: {
      heroLead: 'One of the oldest sauropods from South America, named from a scatter of bones and teeth that turned out to belong to more than one animal.',
      heroMedia: {
        file: 'Amygdalodon LM.png',
        title: 'Life restoration of Amygdalodon patagonicus',
        alt: 'Life restoration of the early sauropod Amygdalodon patagonicus in side view',
        caption: 'Life restoration by Leví Bernardo Martínez. Because the fossils are fragmentary, body proportions are largely modelled on better-known early sauropods.',
        credit: 'Leví Bernardo Martínez · CC BY-SA 3.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amygdalodon_LM.png'
      },
      quickFacts: [
        { label: 'Age', value: 'Early–Middle Jurassic · about 182–173 Ma' },
        { label: 'Location', value: 'Chubut, Argentina' },
        { label: 'Known size', value: 'poorly constrained' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Amygdalodon was an early sauropod that lived in Patagonia around the boundary between the Early and Middle Jurassic. Its name means "almond tooth", after the broad, spoon-shaped teeth that were among the first bones found.',
        'What it looked like is only loosely known. The fossils are a handful of vertebrae, ribs, hip and limb bones and teeth, and revision has shown that they come from at least two sauropods plus one bone from an unrelated animal. A single back vertebra now serves as the name-bearing lectotype.',
        'Despite its poor preservation, Amygdalodon matters because it is one of the earliest sauropods from South America and sits close to the origin of Eusauropoda, the group that contains almost all later giants. Its published body lengths are extrapolations rather than measurements.'
      ],
      animalHighlights: [
        'Broad, spatulate teeth gave the genus its name and are its most distinctive remains.',
        'The type material is a mixed assemblage representing at least two sauropod individuals.',
        'It is among the oldest sauropod records in South America, close to the base of Eusauropoda.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Plant-eater',
          level: 'Supported by tooth shape',
          reason: 'Spatulate teeth with wear facets match the cropping dentition of other early sauropods.'
        },
        {
          label: 'Movement',
          value: 'Quadrupedal',
          level: 'Inferred from relatives',
          reason: 'Limb material is fragmentary; four-legged walking is inferred from the sauropod body plan rather than from a preserved limb series.'
        },
        {
          label: 'Known size',
          value: 'around 12 m · rough',
          level: 'Loose extrapolation',
          reason: 'Published lengths rest on scaling isolated bones against better-known sauropods and carry wide uncertainty.'
        },
        {
          label: 'Appearance',
          value: 'Largely reconstructed',
          level: 'Modelled on relatives',
          reason: 'Too little of the skeleton is known to fix proportions; restorations follow other early eusauropods.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Early–Middle Jurassic (late Toarcian–early Aalenian)' },
        { label: 'Approximate age', value: 'about 182–173 million years ago' },
        { label: 'Rock unit', value: 'Cerro Carnerero Formation' },
        { label: 'Type locality', value: 'Cerro Carnerero, near Pampa de Agnia, Chubut, Argentina' }
      ],
      locality: {
        name: 'Cerro Carnerero',
        region: 'Chubut Province, Argentina',
        note: 'Cerro Carnerero Formation. The map shows a regional reference because exact site coordinates are not plotted.'
      },
      classificationSummary: 'Amygdalodon is an early sauropod close to the origin of Eusauropoda. Rauhut placed it within basal Eusauropoda, while a dental analysis by Carballido and Pol recovered it just outside that clade.',
      related: [
        { id: 'patagosaurus', reason: 'Compare with a better-known Middle Jurassic eusauropod from the same region.' },
        { id: 'vulcanodon', reason: 'Compare with another fragmentary early sauropod from Gondwana.' },
        { id: 'barapasaurus', reason: 'Compare with an Early Jurassic sauropod known from far more complete remains.' }
      ],
      questions: [
        {
          title: 'How many animals are in the type material?',
          copy: 'At least two sauropods and one other vertebrate. Only the lectotype vertebra securely carries the name.'
        },
        {
          title: 'How old are the rocks?',
          copy: 'The formation spans the Early–Middle Jurassic boundary and has not been dated to a narrow interval.'
        },
        {
          title: 'Is it a eusauropod?',
          copy: 'Analyses place it either just inside or just outside Eusauropoda, a difference that hinges on a few characters of the teeth and vertebrae.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'Updated Museo de La Plata catalogue data report a late Toarcian–early Aalenian age. This crosses the Early–Middle Jurassic boundary, so the catalogue period label is necessarily simplified.',
    sources: [
      { type: 'systematic-revision', citation: 'Rauhut (2003), Revision of Amygdalodon patagonicus', url: 'https://doi.org/10.1002/mmng.20030060110' },
      { type: 'dental-revision', citation: 'Carballido & Pol (2010), The dentition of Amygdalodon patagonicus', url: 'https://doi.org/10.1016/j.crpv.2010.01.003' },
      { type: 'museum-type-catalogue', citation: 'Otero et al. (2013), Dinosaur type specimens housed at the Museo de La Plata', url: 'https://palaeo-electronica.org/content/2013-technical/410-museo-de-la-plata-catalogue' }
    ],
    residualUncertainty: [
      'The type assemblage is disarticulated and contains more than one individual.',
      'The formation age is broad and not resolved to a narrow numerical interval.',
      'The lectotype is incomplete, limiting the genus-level diagnosis.',
      'A published full-body length is necessarily a loose extrapolation.'
    ],
    evidence: {
      score: 28,
      summary: 'The name is anchored by one dorsal vertebra within a fragmentary mixed assemblage representing at least two sauropods and another vertebrate.',
      material: 'Lectotype posterior dorsal vertebra plus disarticulated sauropod bones from at least two individuals and one indeterminate vertebrate element.',
      formations: 'Cerro Carnerero Formation, Patagonia, Argentina.',
      confidenceLimit: 'The material establishes an early sauropod occurrence but supports only a loose body-size reconstruction and limited genus-level diagnosis.',
      sourceBasis: 'Rauhut 2003, Carballido & Pol 2010 and Otero et al. 2013.',
      specimens: [
        { name: 'Amygdalodon lectotype', id: 'MLP 46-VIII-21-1/2', institution: 'Museo de La Plata', note: 'Posterior dorsal vertebra selected to anchor the species name.' },
        { name: 'Referred type assemblage', id: 'MLP 46-VIII-21 series', institution: 'Museo de La Plata', note: 'Disarticulated material from at least two sauropod individuals, with one indeterminate vertebrate element.' }
      ],
      uncertainties: ['mixed assemblage', 'formation age resolution', 'diagnostic limits', 'body size'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'A single back vertebra anchors the name; the rest is a mixed scatter of bones.',
        standfirst: 'Amygdalodon rests on a fragmentary collection from Cerro Carnerero that was once treated as one skeleton. Revision showed it to contain at least two sauropods and one unrelated vertebrate, so a posterior dorsal vertebra was chosen as the lectotype.',
        coverage: {
          label: 'Low',
          level: 1,
          maximum: 4,
          basis: 'Only isolated teeth, vertebrae, ribs, a pubis and limb fragments are known, from more than one individual. No skull, no articulated series and no associated skeleton.'
        },
        metrics: [
          { label: 'Known remains', value: 'Teeth and scattered bones' },
          { label: 'Individuals', value: 'At least 2 sauropods' },
          { label: 'Key limitation', value: 'Mixed, fragmentary assemblage' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'Several spatulate teeth, a few cervical, dorsal and caudal vertebrae, rib fragments, a right pubis and fragmentary limb elements. One bone in the original collection belongs to an indeterminate non-sauropod vertebrate.',
          note: 'Because the assemblage is mixed and disarticulated, only features of the lectotype vertebra can be used with confidence to diagnose the genus.'
        },
        media: [
          {
            file: 'Type material of Amygdalodon patagonicus Cabrera. 1947.png',
            kind: 'Type material',
            title: 'Teeth and vertebrae from the type assemblage',
            alt: 'Published figure of teeth and vertebrae from the Amygdalodon patagonicus type material',
            caption: 'Figure from Rauhut\'s 2003 revision showing the almond-shaped teeth and vertebrae of the type collection at the Museo de La Plata.',
            credit: 'O. W. M. Rauhut · CC BY 3.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Type_material_of_Amygdalodon_patagonicus_Cabrera._1947.png'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Isolated spatulate teeth only; no skull or jaw bones.' },
          { label: 'Vertebral column', value: 'The lectotype posterior dorsal vertebra plus a few other cervical, dorsal and caudal vertebrae and rib fragments.' },
          { label: 'Girdles and limbs', value: 'A right pubis and fragmentary limb bones; no complete limb.' },
          { label: 'Exceptional preservation', value: 'None. No skin, colour or gut contents are known.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'MLP 46-VIII-21-1/2 · lectotype',
            description: 'A posterior dorsal vertebra selected by Rauhut in 2003 to anchor the species name after the original type collection proved to contain more than one animal.',
            meta: 'Cerro Carnerero · Cerro Carnerero Formation · Museo de La Plata'
          },
          {
            kicker: 'Remaining type collection',
            title: 'MLP 46-VIII-21 series',
            description: 'Teeth, vertebrae, ribs, a pubis and limb fragments collected in 1947 and described by Cabrera as one skeleton. They represent at least two sauropod individuals and one indeterminate vertebrate.',
            meta: 'One locality · association not demonstrated'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'A lectotype vertebra and a small, mixed assemblage of teeth and bones from a single Patagonian locality.'
          },
          {
            label: 'Scientific interpretation',
            value: 'An early sauropod near the base of Eusauropoda, showing that the group had reached South America by the Early to early Middle Jurassic.'
          },
          {
            label: 'Still unknown',
            value: 'Skull form, body proportions, adult size, limb anatomy, and how many of the collected bones belong to the lectotype individual.'
          }
        ],
        resources: [
          {
            type: 'Systematic revision',
            title: 'Rauhut · 2003',
            description: 'Revision of the type material, designation of the lectotype and phylogenetic assessment.',
            access: 'DOI record',
            url: 'https://doi.org/10.1002/mmng.20030060110'
          },
          {
            type: 'Dental revision',
            title: 'Carballido & Pol · 2010',
            description: 'Description of the dentition and its bearing on the position of Amygdalodon.',
            access: 'DOI record',
            url: 'https://doi.org/10.1016/j.crpv.2010.01.003'
          },
          {
            type: 'Museum catalogue',
            title: 'Otero et al. · 2013',
            description: 'Catalogue of dinosaur type specimens at the Museo de La Plata, with updated age data.',
            access: 'Read online',
            url: 'https://palaeo-electronica.org/content/2013-technical/410-museo-de-la-plata-catalogue'
          },
          {
            type: 'Evidence image',
            title: 'Type material figure',
            description: 'Source page, creator details and reuse licence for the figure of the type collection.',
            access: 'CC BY 3.0',
            url: 'https://commons.wikimedia.org/wiki/File:Type_material_of_Amygdalodon_patagonicus_Cabrera._1947.png'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38655'
          }
        ],
        limitations: 'The coverage band describes the securely referred material at genus level. It is an editorial evidence summary, not a published completeness percentage.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  tyrannosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and taxonomic status',
      'geological age and formation',
      'name-bearing and principal referred specimens',
      'growth series and the Nanotyrannus dispute',
      'integument evidence',
      'profile narrative and residual uncertainty'
    ],
    record: {
      period: 'Late Cretaceous',
      mya: 'latest Maastrichtian, about 68–66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Tyrannosauroidea', 'Tyrannosauridae', 'Tyrannosaurinae', 'Tyrannosaurus'],
      diet: 'Carnivore',
      locomotion: 'Bipedal',
      description: 'Tyrannosaurus rex was a giant tyrannosaurine from latest Maastrichtian western North America, known from dozens of skulls and partial to substantial skeletons. The growth series must now be separated from the active dispute over which small-bodied specimens belong to juvenile T. rex versus the distinct contemporary genus Nanotyrannus.',
      facts: [
        'The holotype CM 9380 is a partial skull and skeleton collected by Barnum Brown in 1902 from the Hell Creek Formation of Montana and described by Osborn in 1905.',
        'FMNH PR 2081 ("Sue") is the most complete and among the largest specimens, preserving about 90 per cent of the skeleton by bone volume.',
        'Growth, bite force, injuries and skin impressions are directly studied from a large sample, but Carr\'s 2020 assignment of controversial small specimens to the T. rex growth series is no longer treated as settled.',
        'Two independent late-2025 studies supported a mature, distinct Nanotyrannus using a new associated specimen and histology of the holotype; further testing may refine which specimens belong to each genus.',
        'Adult T. rex scale impressions exist, while the amount of feathering remains unknown.'
      ]
    },
    presentation: {
      heroLead: 'The best-documented giant predator of the Mesozoic, known from dozens of skulls and skeletons that record its growth, injuries and skin, and still the subject of live debate about which specimens are truly juveniles.',
      heroMedia: {
        file: 'Tyrannosaurus-rex-Profile-steveoc86.png',
        title: 'Life restoration of Tyrannosaurus rex',
        alt: 'Life restoration of Tyrannosaurus rex in side view',
        caption: 'Life restoration by Steveoc 86. Proportions follow published skeletal reconstructions; skin texture beyond the known scale patches and colour are interpretive.',
        credit: 'Steveoc 86 · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tyrannosaurus-rex-Profile-steveoc86.png'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Cretaceous · about 68–66 Ma' },
        { label: 'Location', value: 'Western USA and Canada' },
        { label: 'Known size', value: 'about 12–12.5 m · 8–9 t' },
        { label: 'Diet', value: 'Carnivore' }
      ],
      animalParagraphs: [
        'Tyrannosaurus rex was a massive two-legged predator that lived across western North America in the last two million years of the Cretaceous. Adults reached about twelve metres in length and weighed around eight to nine tonnes, with a skull up to one and a half metres long carrying thick, banana-shaped teeth built for crushing bone.',
        'Its tiny two-fingered arms contrast with an enormously deep skull, a heavily muscled neck and long, powerful hindlimbs. Bite marks on prey bones, healed injuries, tooth-marked Triceratops pelves and coprolites full of crushed bone show that it fed on the largest animals in its environment.',
        'Because so many individuals are known, Tyrannosaurus is the reference point for how a giant dinosaur grew, moved and fed. That sample also creates its biggest controversy: whether the small tyrannosaurs found alongside it are juveniles or a separate genus, Nanotyrannus.'
      ],
      animalHighlights: [
        'A skull up to 1.5 m long with thickened teeth and one of the strongest bites measured for any land animal.',
        'Reduced two-fingered forelimbs paired with long, robust hindlimbs and a deep, muscular tail.',
        'Patches of small scales are preserved from the neck, hip and tail of adult specimens; feathering is not directly documented in adults.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Apex carnivore',
          level: 'Directly evidenced',
          reason: 'Bite-marked bones of Triceratops and Edmontosaurus, bone-rich coprolites and tooth wear document feeding on large prey.'
        },
        {
          label: 'Movement',
          value: 'Bipedal walker',
          level: 'Running speed debated',
          reason: 'Limb proportions and biomechanical models suggest a brisk walk in adults; a true gallop is unlikely at adult mass.'
        },
        {
          label: 'Known size',
          value: 'about 12–12.5 m · 8–9 t',
          level: 'Well constrained for large adults',
          reason: 'Sue and Scotty are nearly complete large individuals; mass still depends on the reconstruction method used.'
        },
        {
          label: 'Appearance',
          value: 'Scales confirmed in patches',
          level: 'Feather extent unknown',
          reason: 'Skin impressions from several adults show small scales; whether juveniles or other body regions carried feathers is not directly known.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Cretaceous (latest Maastrichtian)' },
        { label: 'Approximate age', value: 'about 68–66 million years ago' },
        { label: 'Rock unit', value: 'Hell Creek, Lance, Scollard, Frenchman and equivalent formations' },
        { label: 'Type locality', value: 'Hell Creek Formation, Garfield County, Montana, USA' }
      ],
      locality: {
        name: 'Hell Creek badlands',
        region: 'Garfield County, Montana, USA',
        note: 'Type locality of CM 9380. Referred specimens come from Montana, the Dakotas, Wyoming, Colorado, Utah, New Mexico, Texas, Alberta and Saskatchewan; the map shows a regional reference.'
      },
      classificationSummary: 'Tyrannosaurus is the name-bearing genus of Tyrannosauridae and of the subfamily Tyrannosaurinae. Its closest relative is usually recovered as the Asian Tarbosaurus. Proposals to split the sample into several species, and the status of Nanotyrannus, remain unsettled.',
      related: [
        { id: 'tarbosaurus', reason: 'Its closest Asian relative, similar in build but somewhat smaller.' },
        { id: 'gorgosaurus', reason: 'An earlier, more lightly built tyrannosaurid known from a growth series.' },
        { id: 'triceratops', reason: 'Its most frequently documented prey, with tooth-marked bones.' }
      ],
      questions: [
        {
          title: 'Is Nanotyrannus a separate genus?',
          copy: 'Two 2025 studies concluded that the small tyrannosaurs of Hell Creek were mature animals of a distinct genus. If accepted, several specimens leave the T. rex growth series and the juvenile stage becomes less well known.'
        },
        {
          title: 'How fast could it move?',
          copy: 'Estimates range from a fast walk to a slow run. Bone strength and muscle-mass models limit adults to roughly 20–30 km/h, while juveniles were probably much quicker.'
        },
        {
          title: 'One species or several?',
          copy: 'A 2022 proposal to divide Tyrannosaurus into three species was rejected by most subsequent analyses, but variation across the sample is real and still under study.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'Secure T. rex records occupy the final roughly two million years of the Cretaceous, contemporaneous with specimens newly reassigned to Nanotyrannus.',
    sources: [
      { type: 'original-description', citation: 'Osborn (1905), Tyrannosaurus and other Cretaceous carnivorous dinosaurs', url: 'https://digitallibrary.amnh.org/items/a02fc8e6-2c29-45cd-a95a-271d17d1786f' },
      { type: 'osteology', citation: 'Brochu (2003), Osteology of Tyrannosaurus rex: insights from a nearly complete skeleton', url: 'https://doi.org/10.1080/02724634.2003.10010947' },
      { type: 'growth-series', citation: 'Carr (2020), A high-resolution growth series of Tyrannosaurus rex', url: 'https://doi.org/10.7717/peerj.9192' },
      { type: 'taxonomy', citation: 'Zanno & Napoli (2025), Nanotyrannus and Tyrannosaurus as coexisting genera', url: 'https://doi.org/10.1038/s41586-025-09801-6' },
      { type: 'histology', citation: 'Griffin et al. (2025), Independent maturity test of the Nanotyrannus holotype', url: 'https://doi.org/10.1126/science.adx8706' },
      { type: 'integument', citation: 'Bell et al. (2017), Tyrannosauroid integument reveals conflicting patterns of gigantism and feather evolution', url: 'https://doi.org/10.1098/rsbl.2017.0092' }
    ],
    residualUncertainty: [
      'Assignment of small-bodied Hell Creek tyrannosaurs between Tyrannosaurus and Nanotyrannus is unresolved.',
      'Proposals to split Tyrannosaurus into multiple species have not gained consensus.',
      'Maximum body mass depends on the estimation method.',
      'The distribution of feathers, if any, on adults or juveniles is not directly known.'
    ],
    evidence: {
      score: 99,
      summary: 'Dozens of skulls and partial to nearly complete skeletons, spanning a wide size range, make Tyrannosaurus one of the best-sampled non-avian dinosaurs; the open question is how many of the small specimens belong to it.',
      material: 'More than fifty specimens including several nearly complete skeletons (FMNH PR 2081, RSM P2523.8, BHI 3033), the holotype CM 9380, AMNH 5027 and skin impressions from multiple individuals.',
      formations: ['Hell Creek Formation — Montana and the Dakotas, USA', 'Lance Formation — Wyoming, USA', 'Scollard and Frenchman formations — Alberta and Saskatchewan, Canada'],
      confidenceLimit: 'Adult anatomy is exceptionally well documented; do not treat every small tyrannosaur as a juvenile T. rex, keep mass as an estimate, and do not infer a fully scaly or fully feathered body from incomplete skin coverage.',
      sourceBasis: 'Osborn 1905, Brochu 2003, Carr 2020, Bell et al. 2017, Zanno & Napoli 2025 and Griffin et al. 2025.',
      specimens: [
        { name: 'Holotype', id: 'CM 9380', institution: 'Carnegie Museum of Natural History', note: 'Partial skull and skeleton collected by Barnum Brown in 1902; originally AMNH 973, sold to Pittsburgh in 1941.' },
        { name: '"Sue"', id: 'FMNH PR 2081', institution: 'Field Museum of Natural History', note: 'About 90 per cent complete by bone volume; the most thoroughly described individual.' },
        { name: 'AMNH 5027', id: 'AMNH 5027', institution: 'American Museum of Natural History', note: 'Nearly complete skull with much of the skeleton; basis of many classic reconstructions.' },
        { name: '"Scotty"', id: 'RSM P2523.8', institution: 'Royal Saskatchewan Museum', note: 'Among the largest and oldest individuals by bone histology.' }
      ],
      uncertainties: ['Tyrannosaurus–Nanotyrannus specimen assignment', 'species proposals', 'maximum mass', 'feather distribution'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'Dozens of skeletons, several nearly complete, from the last two million years of the Cretaceous.',
        standfirst: 'Tyrannosaurus rex is known from more than fifty specimens across Montana, the Dakotas, Wyoming and the Canadian prairies, including some of the most complete large theropod skeletons ever found. Its evidence base is exceptional; the debate is about the edges of that sample.',
        coverage: {
          label: 'Excellent',
          level: 4,
          maximum: 4,
          basis: 'Every region of the skeleton is represented by multiple individuals, including articulated skulls, complete limbs, gastralia and skin impressions.'
        },
        metrics: [
          { label: 'Known remains', value: 'Nearly complete skeletons' },
          { label: 'Individuals', value: 'More than 50' },
          { label: 'Key limitation', value: 'Juvenile stage contested' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'Complete and near-complete skulls, full vertebral series, forelimbs with both fingers, pelves, hindlimbs and feet, furculae and gastralia, plus small patches of scaly skin from the neck, pelvis and tail of several adults.',
          note: 'The main gap is at the young end of the growth series: if the Nanotyrannus specimens are a separate genus, very few true juvenile T. rex are known.'
        },
        media: [
          {
            file: 'Tyrannosaurus Rex Holotype.jpg',
            kind: 'Type specimen',
            title: 'Holotype CM 9380 mounted at the Carnegie Museum',
            alt: 'Mounted skeleton of the Tyrannosaurus rex holotype CM 9380 at the Carnegie Museum of Natural History',
            caption: 'The holotype skeleton as mounted in Pittsburgh. Missing elements in the mount are reconstructed from other specimens.',
            credit: 'ScottRobertAnselmo · CC BY-SA 3.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex_Holotype.jpg'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Many complete skulls with dentition, braincases studied by CT, and hyoid elements.' },
          { label: 'Vertebral column', value: 'Complete cervical, dorsal, sacral and caudal series in several specimens; ribs, gastralia and chevrons.' },
          { label: 'Girdles and limbs', value: 'Complete pectoral and pelvic girdles, both forelimbs with two-fingered hands, hindlimbs and feet, and furculae.' },
          { label: 'Exceptional preservation', value: 'Skin impressions with small scales from several body regions, healed injuries and pathologies, and coprolites attributed to the genus.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'CM 9380 · holotype',
            description: 'A partial skull and skeleton found by Barnum Brown in 1902 in the Hell Creek badlands of Montana and described by Henry Fairfield Osborn in 1905. Originally AMNH 973, it moved to the Carnegie Museum in 1941.',
            meta: 'Garfield County, Montana · Hell Creek Formation · Carnegie Museum of Natural History'
          },
          {
            kicker: 'Most complete specimen',
            title: 'FMNH PR 2081 · "Sue"',
            description: 'Discovered in South Dakota in 1990 and about 90 per cent complete by bone volume. Its detailed osteology, growth history and pathologies underpin much of what is known about the species.',
            meta: 'Cheyenne River Reservation, South Dakota · Hell Creek Formation · Field Museum'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'Dozens of skulls and skeletons of all sizes, skin impressions, bite-marked prey bones and bone-filled coprolites.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A slow-growing-then-rapidly-maturing apex predator whose bone-crushing bite and stereoscopic vision made it the dominant carnivore of its ecosystem.'
          },
          {
            label: 'Still unknown',
            value: 'Whether the small Hell Creek tyrannosaurs are juveniles, the extent of any feathering, top speed, and whether the sample contains one species or several.'
          }
        ],
        resources: [
          {
            type: 'Osteology',
            title: 'Brochu · 2003',
            description: 'Bone-by-bone description of FMNH PR 2081, the standard anatomical reference.',
            access: 'DOI record',
            url: 'https://doi.org/10.1080/02724634.2003.10010947'
          },
          {
            type: 'Growth series',
            title: 'Carr · 2020',
            description: 'Proposed high-resolution growth series based on 44 specimens.',
            access: 'Open access',
            url: 'https://doi.org/10.7717/peerj.9192'
          },
          {
            type: 'Taxonomy',
            title: 'Zanno & Napoli · 2025',
            description: 'Case for Nanotyrannus as a distinct genus coexisting with Tyrannosaurus.',
            access: 'DOI record',
            url: 'https://doi.org/10.1038/s41586-025-09801-6'
          },
          {
            type: 'Integument',
            title: 'Bell et al. · 2017',
            description: 'Description of scaly skin impressions from Tyrannosaurus and relatives.',
            access: 'DOI record',
            url: 'https://doi.org/10.1098/rsbl.2017.0092'
          },
          {
            type: 'Evidence image',
            title: 'Holotype mount photograph',
            description: 'Source page, creator details and reuse licence for the CM 9380 image.',
            access: 'CC BY-SA 3.0',
            url: 'https://commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex_Holotype.jpg'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38613'
          }
        ],
        limitations: 'The coverage band describes the combined sample at genus level. It is an editorial evidence summary, not a published completeness percentage, and it does not resolve which small specimens belong to the genus.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  triceratops: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and species',
      'geological age and formations',
      'name-bearing and principal referred specimens',
      'growth changes and the Torosaurus question',
      'profile narrative and residual uncertainty'
    ],
    record: {
      period: 'Late Cretaceous',
      mya: 'latest Maastrichtian, about 68–66 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ceratopsia', 'Ceratopsidae', 'Chasmosaurinae', 'Triceratops'],
      diet: 'Herbivore',
      locomotion: 'Quadrupedal',
      description: 'Triceratops was a large chasmosaurine ceratopsid from the Hell Creek and Lance formations, known from many skulls and partial skeletons. T. horridus and T. prorsus show stratigraphic and morphological separation.',
      facts: [
        'The holotype of T. horridus, YPM 1820, is a partial skull collected by John Bell Hatcher in 1888 from the Lance Formation of Wyoming and described by Marsh in 1889.',
        'Well over a hundred skulls or partial skulls are known, making Triceratops the most abundant large dinosaur of the Hell Creek Formation.',
        'Growth substantially altered horn orientation and frill shape: juveniles had short, backward-curving brow horns that rotated forward with age.',
        'The proposal that Torosaurus is an old Triceratops remains controversial and is not consensus.',
        'Two species are recognised, T. horridus from lower and T. prorsus from upper Hell Creek strata.'
      ]
    },
    presentation: {
      heroLead: 'The most abundant large dinosaur of the latest Cretaceous, known from more than a hundred skulls that record how its horns and frill changed with age.',
      heroMedia: {
        file: 'Triceratops horridus life restoration.jpg',
        title: 'Life restoration of Triceratops horridus',
        alt: 'Life restoration of Triceratops horridus in side view',
        caption: 'Life restoration based on a published skeletal reconstruction. Skin texture follows preserved impressions in outline; colour is interpretive.',
        credit: 'Anonymous Dinonerd · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Triceratops_horridus_life_restoration.jpg'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Cretaceous · about 68–66 Ma' },
        { label: 'Location', value: 'Western USA and Canada' },
        { label: 'Known size', value: 'about 8–9 m · 6–10 t' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Triceratops was a heavily built four-legged plant-eater with a skull up to two and a half metres long, two long brow horns, a shorter nose horn and a solid bony frill. It lived in the last two million years of the Cretaceous and shared its floodplains with Tyrannosaurus.',
        'A beak, shearing dental batteries and a low-slung head suggest it cropped tough, low-growing vegetation. Healed wounds on frills and skulls indicate that the horns were used in contests between individuals, though they would also have deterred predators.',
        'Because so many skulls are known from a well-dated rock sequence, Triceratops offers an unusually clear picture of growth and of change through time: the two species replace one another up the Hell Creek section, and juveniles look strikingly different from adults.'
      ],
      animalHighlights: [
        'One of the largest skulls of any land animal, up to about 2.5 m long including the frill.',
        'Brow horns that curved backward in juveniles and rotated forward as the animal matured.',
        'Skin impressions show large, irregular scales, some with central bosses, over the flanks.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Low browser',
          level: 'Supported by beak and dental batteries',
          reason: 'A sharp beak and hundreds of shearing teeth processed fibrous plants; the specific diet is not preserved.'
        },
        {
          label: 'Movement',
          value: 'Quadrupedal',
          level: 'Supported by limbs and trackways',
          reason: 'Robust limbs and semi-sprawled forelimbs are consistent with steady walking; trackways attributed to ceratopsids support this posture.'
        },
        {
          label: 'Known size',
          value: 'about 8–9 m long',
          level: 'Well constrained',
          reason: 'Several large, well-preserved individuals are known; mass estimates range from about 6 to 10 tonnes.'
        },
        {
          label: 'Appearance',
          value: 'Skull and scales well known',
          level: 'Postcranium less complete',
          reason: 'Skulls are abundant and skin impressions exist; fully articulated skeletons are comparatively rare.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Cretaceous (latest Maastrichtian)' },
        { label: 'Approximate age', value: 'about 68–66 million years ago' },
        { label: 'Rock unit', value: 'Hell Creek, Lance, Scollard and Frenchman formations' },
        { label: 'Type locality', value: 'Lance Formation, Niobrara County, Wyoming, USA' }
      ],
      locality: {
        name: 'Lance Creek area',
        region: 'Niobrara County, Wyoming, USA',
        note: 'Type locality of YPM 1820. Most referred material comes from Montana, the Dakotas and Wyoming; the map shows a regional reference.'
      },
      classificationSummary: 'Triceratops is a chasmosaurine ceratopsid. It is closely related to Torosaurus and Nedoceratops, and whether those names represent distinct animals or growth stages of Triceratops is an active debate.',
      related: [
        { id: 'torosaurus', reason: 'Proposed by some to be the fully mature form of Triceratops.' },
        { id: 'chasmosaurus', reason: 'An earlier, longer-frilled relative from Alberta.' },
        { id: 'tyrannosaurus', reason: 'Its main predator, whose tooth marks are found on Triceratops bones.' }
      ],
      questions: [
        {
          title: 'Is Torosaurus an old Triceratops?',
          copy: 'A 2010 proposal argued that the fenestrated frill of Torosaurus is the final growth stage of Triceratops. Later tests found immature Torosaurus and mature Triceratops, so most workers keep them separate.'
        },
        {
          title: 'How many species?',
          copy: 'T. horridus and T. prorsus are separated stratigraphically, with intermediate forms between. Whether this is one evolving lineage or two species is a matter of definition as much as data.'
        },
        {
          title: 'What were the horns for?',
          copy: 'Healed lesions on frills suggest intraspecific combat, but display and species recognition are also plausible and not mutually exclusive.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'Secure occurrences are restricted to the final roughly two million years of the Cretaceous; T. horridus occurs lower and T. prorsus higher in the Hell Creek Formation.',
    sources: [
      { type: 'stratigraphy-and-evolution', citation: 'Scannella et al. (2014), Evolutionary trends in Triceratops from the Hell Creek Formation', url: 'https://doi.org/10.1073/pnas.1313334111' },
      { type: 'growth', citation: 'Horner & Goodwin (2006), Major cranial changes during Triceratops ontogeny', url: 'https://doi.org/10.1098/rspb.2006.3643' },
      { type: 'taxonomy', citation: 'Longrich & Field (2012), Torosaurus is not Triceratops', url: 'https://doi.org/10.1371/journal.pone.0032623' },
      { type: 'monograph', citation: 'Hatcher, Marsh & Lull (1907), The Ceratopsia', url: 'https://doi.org/10.5962/bhl.title.61748' }
    ],
    residualUncertainty: [
      'Species boundaries within the Hell Creek sequence remain a matter of definition.',
      'The relationship between Triceratops, Torosaurus and Nedoceratops is debated.',
      'Complete articulated postcranial skeletons are rare compared with skulls.',
      'Horn function is inferred from pathology and analogy rather than observed.'
    ],
    evidence: {
      score: 99,
      summary: 'More than a hundred skulls and many partial skeletons spanning growth stages make Triceratops one of the best-sampled dinosaurs; the open questions concern taxonomy rather than anatomy.',
      material: 'Holotype partial skull YPM 1820, numerous complete skulls, partial and some substantially complete skeletons, juveniles, and skin impressions.',
      formations: ['Lance Formation — Wyoming, USA', 'Hell Creek Formation — Montana and the Dakotas, USA', 'Scollard and Frenchman formations — Alberta and Saskatchewan, Canada'],
      confidenceLimit: 'Skull anatomy and growth are exceptionally well documented; keep the species separate and do not present Torosaurus synonymy as settled.',
      sourceBasis: 'Hatcher, Marsh & Lull 1907, Horner & Goodwin 2006, Longrich & Field 2012 and Scannella et al. 2014.',
      specimens: [
        { name: 'Holotype of T. horridus', id: 'YPM 1820', institution: 'Yale Peabody Museum', note: 'Partial skull with horns collected by Hatcher in 1888 near Lance Creek, Wyoming.' },
        { name: 'Holotype of T. prorsus', id: 'YPM 1822', institution: 'Yale Peabody Museum', note: 'Nearly complete skull, also from the Lance Formation of Wyoming.' },
        { name: '"Hatcher"', id: 'USNM 4842 (composite mount)', institution: 'Smithsonian National Museum of Natural History', note: 'Historic composite mount; the 2001 remount corrected the posture using digital scans.' }
      ],
      uncertainties: ['Torosaurus status', 'species variation', 'horn function'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'More than a hundred skulls and a growth series from hatchling to giant.',
        standfirst: 'Triceratops is the most common large dinosaur of the Hell Creek and Lance formations. Its skulls are so abundant that whole growth sequences and stratigraphic trends can be reconstructed, although complete skeletons remain rarer than heads.',
        coverage: {
          label: 'Excellent',
          level: 4,
          maximum: 4,
          basis: 'Skulls of every growth stage, multiple partial and substantially complete skeletons, and skin impressions are known; the postcranium is less often articulated than the skull.'
        },
        metrics: [
          { label: 'Known remains', value: 'Skulls and partial skeletons' },
          { label: 'Individuals', value: 'More than 100' },
          { label: 'Key limitation', value: 'Few complete articulated skeletons' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'Complete skulls with horns, frills and dental batteries from hatchling to adult; vertebrae, girdles and limbs from many individuals; several substantially complete skeletons; and skin impressions with large polygonal scales.',
          note: 'Skulls fossilise readily because of their size and solidity, so the sample is skull-heavy. Detailed postcranial anatomy relies on a smaller number of good skeletons.'
        },
        media: [
          {
            file: 'Triceratops holotype.jpg',
            kind: 'Type specimen',
            title: 'Holotype skull YPM 1820 as figured in 1907',
            alt: 'Published figure of the Triceratops horridus holotype skull YPM 1820',
            caption: 'The partial holotype skull of Triceratops horridus, figured in Hatcher, Marsh and Lull\'s 1907 monograph on the Ceratopsia.',
            credit: 'Hatcher, Marsh & Lull 1907 · public domain',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Triceratops_holotype.jpg'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Well over a hundred skulls or partial skulls spanning all growth stages, with beaks, horns, frills and dental batteries.' },
          { label: 'Vertebral column', value: 'Cervical, dorsal, sacral and caudal series known from several individuals, including the fused syncervical.' },
          { label: 'Girdles and limbs', value: 'Pectoral and pelvic girdles, forelimbs and hindlimbs from multiple specimens; hands and feet less commonly complete.' },
          { label: 'Exceptional preservation', value: 'Skin impressions showing large scales with central bosses; healed frill and skull lesions; tooth marks from Tyrannosaurus.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'YPM 1820 · holotype of T. horridus',
            description: 'A partial skull with brow horns collected by John Bell Hatcher in 1888 from the Lance Formation near Lance Creek, Wyoming, and named by Marsh in 1889 after an earlier horn core had been mistaken for a bison.',
            meta: 'Niobrara County, Wyoming · Lance Formation · Yale Peabody Museum'
          },
          {
            kicker: 'Growth and stratigraphy',
            title: 'Hell Creek Project sample',
            description: 'Dozens of skulls collected with precise stratigraphic positions across the Hell Creek Formation of Montana document the transition from T. horridus to T. prorsus and the changes in horn and frill shape with age.',
            meta: 'Montana · Hell Creek Formation · Museum of the Rockies and others'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'Abundant skulls of all ages, multiple partial skeletons, skin impressions and healed injuries.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A large low-browsing ceratopsid whose horns and frill changed dramatically with growth and whose lineage evolved measurably across the Hell Creek sequence.'
          },
          {
            label: 'Still unknown',
            value: 'Whether Torosaurus is a growth stage, exactly how the species should be divided, and the primary function of the horns and frill.'
          }
        ],
        resources: [
          {
            type: 'Monograph',
            title: 'Hatcher, Marsh & Lull · 1907',
            description: 'The classic monograph on the Ceratopsia, including the holotype description.',
            access: 'Read online',
            url: 'https://doi.org/10.5962/bhl.title.61748'
          },
          {
            type: 'Growth',
            title: 'Horner & Goodwin · 2006',
            description: 'Cranial changes through the Triceratops growth series.',
            access: 'DOI record',
            url: 'https://doi.org/10.1098/rspb.2006.3643'
          },
          {
            type: 'Stratigraphy',
            title: 'Scannella et al. · 2014',
            description: 'Evolutionary trends in Triceratops through the Hell Creek Formation.',
            access: 'Open access',
            url: 'https://doi.org/10.1073/pnas.1313334111'
          },
          {
            type: 'Taxonomy',
            title: 'Longrich & Field · 2012',
            description: 'Test of the Torosaurus–Triceratops synonymy hypothesis.',
            access: 'Open access',
            url: 'https://doi.org/10.1371/journal.pone.0032623'
          },
          {
            type: 'Evidence image',
            title: 'Holotype skull figure',
            description: 'Source page and reuse terms for the 1907 figure of YPM 1820.',
            access: 'Public domain',
            url: 'https://commons.wikimedia.org/wiki/File:Triceratops_holotype.jpg'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38862'
          }
        ],
        limitations: 'The coverage band describes the combined sample at genus level. It is an editorial evidence summary, not a published completeness percentage.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  velociraptor: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and species',
      'geological age and formation',
      'name-bearing and principal referred specimens',
      'feather evidence',
      'behavioural claims',
      'profile narrative and residual uncertainty'
    ],
    record: {
      period: 'Late Cretaceous',
      mya: 'Campanian, about 75–71 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Dromaeosauridae', 'Velociraptorinae', 'Velociraptor'],
      diet: 'Carnivore',
      locomotion: 'Bipedal',
      description: 'Velociraptor mongoliensis was a small dromaeosaurid from the Djadokhta Formation of Mongolia, known from several skulls and partial skeletons including the Fighting Dinosaurs specimen.',
      facts: [
        'The holotype AMNH 6515 is a crushed but complete skull with a sickle claw, collected at the Flaming Cliffs in 1923 and described by Osborn in 1924.',
        'The Fighting Dinosaurs specimen MPC-D 100/25 preserves a Velociraptor locked with a Protoceratops, apparently buried together mid-struggle.',
        'Quill knobs on an ulna (IGM 100/981) provide direct evidence for large arm feathers.',
        'The Fighting Dinosaurs preserve contact with Protoceratops but do not reveal the entire encounter or habitual hunting style.',
        'V. osmolskae from Bayan Mandahu, China, is a second species known from limited cranial material.'
      ]
    },
    presentation: {
      heroLead: 'A turkey-sized feathered predator from the Gobi, known from exquisite skulls and one of the most famous fossils ever found: two dinosaurs buried in combat.',
      heroMedia: {
        file: 'Velociraptor Restoration.png',
        title: 'Life restoration of Velociraptor mongoliensis',
        alt: 'Life restoration of a feathered Velociraptor mongoliensis',
        caption: 'Life restoration by Fred Wierum. Large arm feathers are supported by quill knobs; body-feather form and colour are interpretive.',
        credit: 'Fred Wierum · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Velociraptor_Restoration.png'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Cretaceous · about 75–71 Ma' },
        { label: 'Location', value: 'Ömnögovi, Mongolia' },
        { label: 'Known size', value: 'about 2 m · 15–20 kg' },
        { label: 'Diet', value: 'Carnivore' }
      ],
      animalParagraphs: [
        'Velociraptor was a small, lightly built predator about two metres long and roughly the weight of a large dog. It had a long, low skull with a slightly upturned snout, grasping hands, and an enlarged sickle-shaped claw on the second toe of each foot that was held clear of the ground.',
        'It lived in a semi-arid landscape of dunes and seasonal streams in what is now the Gobi Desert. Knobs on the forearm bones show that it carried long feathers on its arms, and it was almost certainly feathered over the body, although it could not fly.',
        'Its fame rests on the Fighting Dinosaurs, a Velociraptor and a Protoceratops preserved locked together, and on its cinematic portrayal as a pack hunter the size of a person. The real animal was much smaller, and evidence for coordinated pack hunting is absent.'
      ],
      animalHighlights: [
        'A long, low skull with a distinctive upturned snout and about 26–28 serrated teeth per side.',
        'An enlarged sickle claw on the second toe, preserved in the Fighting Dinosaurs embedded near the neck of its prey.',
        'Quill knobs on the ulna are direct evidence of large, pennaceous arm feathers.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Small-prey carnivore',
          level: 'Directly evidenced',
          reason: 'The Fighting Dinosaurs, tooth-marked Protoceratops bones and a pterosaur bone in one gut cavity document predation and scavenging.'
        },
        {
          label: 'Movement',
          value: 'Agile biped',
          level: 'Supported by limb anatomy',
          reason: 'Long hindlimbs and a stiffened tail indicate a fast, manoeuvrable runner; the sickle claw was likely used to pin prey.'
        },
        {
          label: 'Known size',
          value: 'about 2 m · 15–20 kg',
          level: 'Well constrained',
          reason: 'Several near-complete skeletons agree closely; the film-sized "raptor" was modelled on Deinonychus.'
        },
        {
          label: 'Appearance',
          value: 'Feathered',
          level: 'Arm feathers direct, body inferred',
          reason: 'Quill knobs prove arm feathers; a full plumage is inferred from feathered relatives rather than preserved directly.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Cretaceous (Campanian)' },
        { label: 'Approximate age', value: 'about 75–71 million years ago' },
        { label: 'Rock unit', value: 'Djadokhta Formation' },
        { label: 'Type locality', value: 'Flaming Cliffs (Bayanzag), Ömnögovi, Mongolia' }
      ],
      locality: {
        name: 'Flaming Cliffs (Bayanzag)',
        region: 'Ömnögovi Province, Mongolia',
        note: 'Djadokhta Formation. The Fighting Dinosaurs come from Tugrikin Shireh, also in the Djadokhta Formation. The map shows a regional reference.'
      },
      classificationSummary: 'Velociraptor is a dromaeosaurid and the name-bearing genus of Velociraptorinae. It is closely related to other Asian dromaeosaurids such as Tsaagan and Linheraptor, with Deinonychus a more distant North American cousin.',
      related: [
        { id: 'deinonychus', reason: 'The larger North American relative on which the film "Velociraptor" was based.' },
        { id: 'protoceratops', reason: 'Its prey in the Fighting Dinosaurs specimen.' },
        { id: 'utahraptor', reason: 'The largest known dromaeosaurid, for scale.' }
      ],
      questions: [
        {
          title: 'Did it hunt in packs?',
          copy: 'No Velociraptor bonebed or trackway shows group behaviour. The pack-hunting image comes from Deinonychus and from fiction, and even for Deinonychus the evidence is contested.'
        },
        {
          title: 'How much of the body was feathered?',
          copy: 'Quill knobs prove pennaceous arm feathers. Feathering elsewhere is inferred from close relatives preserved in China, not from Velociraptor itself.'
        },
        {
          title: 'What was the sickle claw for?',
          copy: 'Proposals include slashing, pinning prey while feeding, and climbing. The Fighting Dinosaurs show the claw at the prey\'s throat, consistent with pinning or stabbing.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'V. mongoliensis is Campanian Djadokhta Formation; V. osmolskae is a separate Chinese species with limited material.',
    sources: [
      { type: 'original-description', citation: 'Osborn (1924), Three new Theropoda, Protoceratops zone, central Mongolia', url: 'https://digitallibrary.amnh.org/items/25d800cd-76d7-4ced-9dae-39e46f746def' },
      { type: 'osteology', citation: 'Norell & Makovicky (1999), Important features of the dromaeosaurid skeleton II', url: 'https://digitallibrary.amnh.org/items/7c9b0154-7a3c-4618-8226-2b1e5523c334' },
      { type: 'integument', citation: 'Turner et al. (2007), Feather quill knobs in the dinosaur Velociraptor', url: 'https://doi.org/10.1126/science.1145076' },
    ],
    residualUncertainty: [
      'Species limits between V. mongoliensis and V. osmolskae rest on limited material for the latter.',
      'Body feathering is inferred from relatives rather than preserved directly.',
      'Social hunting is not supported by direct evidence.',
      'The exact function of the sickle claw remains interpretive.'
    ],
    evidence: {
      score: 96,
      summary: 'Several skulls and partial to nearly complete skeletons, including two articulated exceptional fossils, document Velociraptor thoroughly; behaviour and full plumage remain inferences.',
      material: 'Holotype skull and claw AMNH 6515, the Fighting Dinosaurs MPC-D 100/25, additional skulls and skeletons from the Djadokhta Formation, and an ulna with quill knobs.',
      formations: ['Djadokhta Formation — Ömnögovi, Mongolia', 'Bayan Mandahu Formation — Inner Mongolia, China (V. osmolskae)'],
      confidenceLimit: 'Anatomy and arm feathers are direct; pack hunting and cinematic size are unsupported.',
      sourceBasis: 'Osborn 1924, Norell & Makovicky 1999, Turner et al. 2007 and Carpenter 1998.',
      specimens: [
        { name: 'Holotype', id: 'AMNH 6515', institution: 'American Museum of Natural History', note: 'Crushed complete skull and a second-toe sickle claw from the Flaming Cliffs, collected 1923.' },
        { name: 'Fighting Dinosaurs', id: 'MPC-D 100/25', institution: 'Mongolian Academy of Sciences', note: 'Nearly complete skeleton locked with a Protoceratops, found at Tugrikin Shireh in 1971.' },
        { name: 'Quill-knob ulna', id: 'IGM 100/981', institution: 'Mongolian Academy of Sciences', note: 'Forearm with a row of attachment bumps for large pennaceous feathers.' }
      ],
      uncertainties: ['social behaviour', 'species limits', 'body feathering'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'Several fine skulls, near-complete skeletons and a predator preserved mid-attack.',
        standfirst: 'Velociraptor is known from around a dozen good specimens from the Djadokhta Formation, including complete skulls and the articulated Fighting Dinosaurs. Its skeleton is thoroughly documented; the gaps are in soft tissue and behaviour.',
        coverage: {
          label: 'Excellent',
          level: 4,
          maximum: 4,
          basis: 'Complete skulls, articulated skeletons including hands, feet and tail, and a forearm with feather attachment points are all known from multiple individuals.'
        },
        metrics: [
          { label: 'Known remains', value: 'Complete skulls and skeletons' },
          { label: 'Individuals', value: 'About a dozen' },
          { label: 'Key limitation', value: 'No preserved feathers or skin' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'Complete skulls with teeth and braincases, full vertebral columns including the rod-stiffened tail, forelimbs with hands, pelves, hindlimbs with the sickle claw in place, and an ulna bearing quill knobs.',
          note: 'The dune sandstones of the Djadokhta preserve bone superbly but not feathers themselves, so plumage is known only from its attachment scars and from relatives elsewhere.'
        },
        media: [
          {
            file: 'Velociraptor MPC-D 100 25 skull.png',
            kind: 'Specimen figure',
            title: 'Skull of the Fighting Dinosaurs Velociraptor, MPC-D 100/25',
            alt: 'Published figure of the Velociraptor mongoliensis skull from the Fighting Dinosaurs specimen in several views',
            caption: 'The skull and lower jaw of the Fighting Dinosaurs Velociraptor, showing the long, low profile and upturned snout characteristic of the genus.',
            credit: 'Barsbold & Osmólska · CC BY 4.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Velociraptor_MPC-D_100_25_skull.png'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Several complete skulls with dentition and braincases, including the holotype and the Fighting Dinosaurs skull.' },
          { label: 'Vertebral column', value: 'Complete cervical, dorsal, sacral and caudal series, with the elongated tail rods preserved in articulation.' },
          { label: 'Girdles and limbs', value: 'Pectoral and pelvic girdles, forelimbs with three-fingered hands, hindlimbs with the enlarged second-toe claw.' },
          { label: 'Exceptional preservation', value: 'Quill knobs on an ulna; a pterosaur bone within one individual\'s gut cavity; the Fighting Dinosaurs in articulation with their prey.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'AMNH 6515 · holotype',
            description: 'A complete but crushed skull and a sickle claw found by Peter Kaisen at the Flaming Cliffs during the 1923 Central Asiatic Expedition, and named by Osborn in 1924.',
            meta: 'Flaming Cliffs · Djadokhta Formation · American Museum of Natural History'
          },
          {
            kicker: 'Exceptional specimen',
            title: 'MPC-D 100/25 · the Fighting Dinosaurs',
            description: 'A nearly complete Velociraptor locked with a Protoceratops, found by a Polish–Mongolian expedition in 1971. The predator\'s sickle claw lies at the throat of its prey while its arm is gripped in the Protoceratops\' beak.',
            meta: 'Tugrikin Shireh · Djadokhta Formation · Mongolian Academy of Sciences'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'Multiple complete skulls and articulated skeletons, feather attachment scars, and a predator and prey preserved together.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A small, feathered, agile dromaeosaurid that hunted or scavenged animals its own size or smaller in a semi-arid dune environment.'
          },
          {
            label: 'Still unknown',
            value: 'Whether it hunted socially, the extent and colour of its plumage, and the precise mechanics of the sickle claw.'
          }
        ],
        resources: [
          {
            type: 'Osteology',
            title: 'Norell & Makovicky · 1999',
            description: 'Detailed description of Velociraptor skeletal anatomy from Djadokhta specimens.',
            access: 'Read online',
            url: 'https://digitallibrary.amnh.org/items/7c9b0154-7a3c-4618-8226-2b1e5523c334'
          },
          {
            type: 'Integument',
            title: 'Turner et al. · 2007',
            description: 'Report of quill knobs on a Velociraptor ulna as evidence of arm feathers.',
            access: 'DOI record',
            url: 'https://doi.org/10.1126/science.1145076'
          },
          {
            type: 'Evidence image',
            title: 'Fighting Dinosaurs skull figure',
            description: 'Source page, creator details and reuse licence for the skull figure.',
            access: 'CC BY 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:Velociraptor_MPC-D_100_25_skull.png'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38564'
          }
        ],
        limitations: 'The coverage band describes the combined V. mongoliensis material at genus level. It is an editorial evidence summary, not a published completeness percentage.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  spinosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and taxonomic status',
      'geological age and formations',
      'destroyed holotype and neotype',
      'semiaquatic evidence and the locomotion dispute',
      'body-size confidence',
      'profile narrative and residual uncertainty'
    ],
    record: {
      period: 'Late Cretaceous',
      mya: 'Cenomanian, about 100–94 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Megalosauroidea', 'Spinosauridae', 'Spinosaurinae', 'Spinosaurus'],
      diet: 'Carnivore (fish and other prey)',
      locomotion: 'Bipedal on land; swimming ability disputed',
      massKg: null,
      description: 'Spinosaurus aegyptiacus was a very large spinosaurid theropod from Cenomanian North Africa. Its long narrow jaws, conical teeth, retracted nostrils, dense bones and deep tail show strong association with aquatic prey and habitats. How it fed remains actively disputed: proposed underwater pursuit and diving conflict with biomechanical analyses favouring wading or surface feeding.',
      facts: [
        'The original Egyptian holotype, BSP 1912 VIII 19, was destroyed in the 1944 bombing of Munich; it survives only in Stromer\'s 1915 description and photographs.',
        'A partial skeleton from the Kem Kem beds of Morocco, FSAC-KK 11888, was designated the neotype in 2014 and expanded in 2020 to include a deep, paddle-like tail.',
        'Shortened hind limbs, dense bones and a tall sail are now well established; their functional meaning is not.',
        'High bone density was interpreted in 2022 as evidence for subaqueous foraging.',
        'A 2022 eLife analysis argued that stability, drag and buoyancy make a fully aquatic pursuit-predator model unlikely; semiaquatic adaptations are well supported, but a single settled swimming and hunting model is not.'
      ]
    },
    presentation: {
      heroLead: 'The longest known predatory dinosaur, a sail-backed fish-eater whose original skeleton was destroyed in wartime and whose way of life is the liveliest debate in theropod research.',
      heroMedia: {
        file: 'Spinosaurus 2020 reconstruction.jpg',
        title: 'Life restoration of Spinosaurus aegyptiacus',
        alt: 'Life restoration of Spinosaurus aegyptiacus with sail and deep tail in side view',
        caption: 'Life restoration following the 2020 reconstruction with a deep, finned tail. Skin, colour and sail outline are interpretive.',
        credit: 'Mariolanzas · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Spinosaurus_2020_reconstruction.jpg'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Cretaceous · about 100–94 Ma' },
        { label: 'Location', value: 'Egypt and Morocco' },
        { label: 'Known size', value: 'about 14 m · composite estimate' },
        { label: 'Diet', value: 'Fish and other prey' }
      ],
      animalParagraphs: [
        'Spinosaurus was an enormous theropod of the Cenomanian river systems of North Africa, estimated at around fourteen metres long. Its skull was long and narrow like a crocodile\'s, with conical teeth and nostrils set well back, and tall spines on its back supported a sail more than a metre high.',
        'Unlike other large theropods it had short hindlimbs, a long trunk, dense bones and, as shown in 2020, a deep, flexible tail. These features point to a life spent in and around water, feeding on the giant fish that filled its habitat, although it also ate other animals.',
        'How aquatic it really was is fiercely debated. One school reconstructs it as a diving pursuit predator propelled by its tail; another, using buoyancy and stability models, argues it waded and fished from the shallows like a giant heron. The evidence supports strong semiaquatic habits but does not yet settle the question.'
      ],
      animalHighlights: [
        'A long, narrow, crocodile-like skull with conical teeth and retracted nostrils suited to catching fish.',
        'Neural spines up to about 1.6 m tall supporting a sail of uncertain function.',
        'Short hindlimbs, dense bones and a deep, paddle-like tail unique among large theropods.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Fish-eater and generalist',
          level: 'Supported by teeth, jaws and isotopes',
          reason: 'Conical teeth, a rosette-tipped snout and oxygen isotopes consistent with time in water indicate piscivory; a pterosaur bone in a related spinosaurid shows the group also took other prey.'
        },
        {
          label: 'Movement',
          value: 'Semiaquatic',
          level: 'Diving versus wading disputed',
          reason: 'Dense bones and a finned tail support swimming; buoyancy and drag models argue against sustained diving. Bipedal on land is now the consensus over earlier quadrupedal proposals.'
        },
        {
          label: 'Known size',
          value: 'about 14 m long',
          level: 'Composite estimate',
          reason: 'No single individual is complete. Length is scaled from the neotype, the destroyed holotype and isolated giant elements, and estimates vary.'
        },
        {
          label: 'Appearance',
          value: 'Sail and proportions established',
          level: 'Sail shape and skin reconstructed',
          reason: 'The spines are known; the soft-tissue outline of the sail, skin texture and colour are not.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Cretaceous (Cenomanian)' },
        { label: 'Approximate age', value: 'about 100–94 million years ago' },
        { label: 'Rock unit', value: 'Bahariya Formation (holotype); Kem Kem Group (neotype)' },
        { label: 'Type locality', value: 'Bahariya Oasis, Western Desert, Egypt' }
      ],
      locality: {
        name: 'Bahariya Oasis',
        region: 'Western Desert, Egypt',
        note: 'Bahariya Formation, type locality of the destroyed holotype. The neotype comes from the Kem Kem beds near Zrigat, south-eastern Morocco. The map shows a regional reference.'
      },
      classificationSummary: 'Spinosaurus is the name-bearing genus of Spinosauridae and of Spinosaurinae, the subfamily that also includes Irritator and Ichthyovenator. Baryonyx and Suchomimus belong to the sister subfamily Baryonychinae.',
      related: [
        { id: 'suchomimus', reason: 'A baryonychine spinosaurid from Niger with a low sail and more conventional limbs.' },
        { id: 'baryonyx', reason: 'The first well-preserved spinosaurid, with fish scales in its gut.' },
        { id: 'carcharodontosaurus', reason: 'The giant land predator that shared the Kem Kem and Bahariya ecosystems.' }
      ],
      questions: [
        {
          title: 'Did it dive and swim after prey?',
          copy: 'Tail shape and bone density say it could swim; hydrodynamic modelling says it would have been slow, unstable and too buoyant to pursue fish underwater. Both camps agree it lived at the water\'s edge.'
        },
        {
          title: 'How much of the reconstruction is one animal?',
          copy: 'The neotype is a partial skeleton. Skull, sail and giant size are combined from the lost holotype and isolated Moroccan bones, so proportions carry real uncertainty.'
        },
        {
          title: 'What was the sail for?',
          copy: 'Display, thermoregulation, a fat store and a swimming aid have all been proposed. None is directly testable from the bones alone.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'The reviewed range follows Cenomanian material from the Bahariya Formation and Kem Kem Group. Isolated spinosaurid material should not automatically extend the species range.',
    sources: [
      { type: 'original-description', citation: 'Stromer (1915), Ergebnisse der Forschungsreisen Prof. E. Stromers in den Wüsten Ägyptens: Das Original des Theropoden Spinosaurus aegyptiacus', url: 'https://www.biodiversitylibrary.org/bibliography/62187' },
      { type: 'neotype-description', citation: 'Ibrahim et al. (2014), Semiaquatic adaptations in a giant predatory dinosaur', url: 'https://doi.org/10.1126/science.1258750' },
      { type: 'tail-anatomy', citation: 'Ibrahim et al. (2020), Tail-propelled aquatic locomotion in a theropod dinosaur', url: 'https://doi.org/10.1038/s41586-020-2190-3' },
      { type: 'bone-density', citation: 'Fabbri et al. (2022), Subaqueous foraging among carnivorous dinosaurs', url: 'https://doi.org/10.1038/s41586-022-04528-0' },
      { type: 'biomechanics', citation: 'Sereno et al. (2022), Spinosaurus is not an aquatic dinosaur', url: 'https://doi.org/10.7554/eLife.80092' }
    ],
    residualUncertainty: [
      'The association and taxonomic identity of some Moroccan bones remain debated.',
      'Maximum length and mass estimates depend strongly on composite reconstruction.',
      'The extent of diving and underwater propulsion remains an active scientific disagreement.',
      'The soft-tissue form and function of the sail are unknown.'
    ],
    evidence: {
      score: 67,
      summary: 'Substantial but composite material supports a semiaquatic spinosaurid; the holotype is lost, the neotype is partial, and its exact locomotion and hunting mode remain disputed.',
      material: 'Destroyed Egyptian holotype known from Stromer\'s figures, the Moroccan neotype FSAC-KK 11888 with skull fragments, vertebrae, sail spines, pelvis, hindlimbs and tail, plus isolated Kem Kem cranial and postcranial elements.',
      formations: ['Bahariya Formation — Bahariya Oasis, Egypt', 'Kem Kem Group — Zrigat and other sites, Morocco'],
      confidenceLimit: 'Semiaquatic specialisation is secure; exact body dimensions, the sail outline and underwater performance are model-dependent.',
      sourceBasis: 'Stromer 1915, Ibrahim et al. 2014/2020, Fabbri et al. 2022 and Sereno et al. 2022.',
      specimens: [
        { name: 'Holotype (destroyed)', id: 'BSP 1912 VIII 19', institution: 'Formerly Bayerische Staatssammlung für Paläontologie, Munich', note: 'Lower jaw, dorsal vertebrae with tall spines and ribs, destroyed in April 1944; known from Stromer\'s description and photographs.' },
        { name: 'Neotype', id: 'FSAC-KK 11888', institution: 'Faculté des Sciences Aïn Chock, Casablanca', note: 'Partial skeleton with skull fragments, vertebrae, sail spines, pelvis, hindlimbs and most of the tail; designated 2014, tail described 2020.' },
        { name: 'Snout', id: 'MSNM V4047', institution: 'Museo di Storia Naturale di Milano', note: 'Large rostrum from the Kem Kem beds, basis of skull reconstructions.' }
      ],
      uncertainties: ['specimen association', 'maximum size', 'underwater foraging mode', 'sail function'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'A holotype lost to war, a partial neotype, and a skeleton assembled from several animals.',
        standfirst: 'Everything known about Spinosaurus aegyptiacus comes from Stromer\'s destroyed Egyptian specimen, the partial Moroccan neotype found a century later, and isolated bones. That is enough to establish an extraordinary animal, but not enough to end the arguments about how it lived.',
        coverage: {
          label: 'Moderate',
          level: 2,
          maximum: 4,
          basis: 'The neotype preserves vertebrae, sail, pelvis, hindlimbs and tail; the skull is known mainly from separate rostra and the lost holotype jaw. No single individual preserves both a complete skull and skeleton.'
        },
        metrics: [
          { label: 'Known remains', value: 'Composite partial skeleton' },
          { label: 'Individuals', value: 'Several, one principal' },
          { label: 'Key limitation', value: 'Holotype destroyed in 1944' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'From the neotype: fragments of the skull, cervical and dorsal vertebrae with tall neural spines, ribs, the pelvis, both hindlimbs and feet, and most of the tail. From other specimens: a large snout, jaw fragments, teeth and isolated vertebrae and limb bones.',
          note: 'Because the neotype was excavated in stages and partly bought from local collectors, whether every bone belongs to one individual has been questioned; the 2020 tail excavation was conducted in situ.'
        },
        media: [
          {
            file: 'Digital skeletal reconstruction of Spinosaurus.png',
            kind: 'Known-material diagram',
            title: 'Digital skeletal reconstruction from Sereno et al. 2022',
            alt: 'Digital skeletal reconstruction of Spinosaurus aegyptiacus in side view',
            caption: 'A digital skeletal reconstruction built from the neotype, the destroyed holotype and referred bones. It is a composite model, not one preserved skeleton.',
            credit: 'Sereno et al. 2022 · CC BY 4.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Digital_skeletal_reconstruction_of_Spinosaurus.png'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'A large rostrum, partial lower jaws including the lost holotype dentary, braincase fragments and isolated teeth; no complete skull.' },
          { label: 'Vertebral column', value: 'Cervical, dorsal and sacral vertebrae, tall sail spines, and a nearly complete tail with elongated chevrons and neural spines.' },
          { label: 'Girdles and limbs', value: 'Pelvis, both femora, tibiae and feet from the neotype; forelimb material is fragmentary.' },
          { label: 'Exceptional preservation', value: 'None in the usual sense; bone histology and density, and oxygen isotopes from teeth, provide indirect ecological evidence.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen (destroyed)',
            title: 'BSP 1912 VIII 19 · holotype',
            description: 'Collected by Richard Markgraf at Bahariya in 1912 and described by Ernst Stromer in 1915. The lower jaw, sail vertebrae and ribs were destroyed when the Munich collection was bombed in April 1944; only Stromer\'s figures and a few photographs survive.',
            meta: 'Bahariya Oasis · Bahariya Formation · formerly Munich'
          },
          {
            kicker: 'Neotype',
            title: 'FSAC-KK 11888 · partial skeleton',
            description: 'A partial skeleton from the Kem Kem beds near Zrigat, Morocco, designated the neotype in 2014. Further excavation in 2018 recovered most of the tail, revealing its deep, paddle-like form.',
            meta: 'Zrigat · Kem Kem Group · Université Hassan II, Casablanca'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'A partial neotype skeleton with sail, pelvis, hindlimbs and tail; a large snout; and the published record of the destroyed holotype.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A giant semiaquatic spinosaurid adapted to catching fish in North African river systems, with unusual proportions among theropods.'
          },
          {
            label: 'Still unknown',
            value: 'Whether it dived and pursued prey underwater, its true length and mass, the shape and purpose of its sail, and whether all referred bones belong to one species.'
          }
        ],
        resources: [
          {
            type: 'Primary description',
            title: 'Stromer · 1915',
            description: 'Original description of the Egyptian holotype, now the only record of it.',
            access: 'Read online',
            url: 'https://www.biodiversitylibrary.org/bibliography/62187'
          },
          {
            type: 'Neotype',
            title: 'Ibrahim et al. · 2014',
            description: 'Designation of the Moroccan neotype and the semiaquatic hypothesis.',
            access: 'DOI record',
            url: 'https://doi.org/10.1126/science.1258750'
          },
          {
            type: 'Tail anatomy',
            title: 'Ibrahim et al. · 2020',
            description: 'Description of the deep, finned tail and the tail-propelled swimming model.',
            access: 'DOI record',
            url: 'https://doi.org/10.1038/s41586-020-2190-3'
          },
          {
            type: 'Counter-analysis',
            title: 'Sereno et al. · 2022',
            description: 'Biomechanical argument that Spinosaurus waded rather than dived.',
            access: 'Open access',
            url: 'https://doi.org/10.7554/eLife.80092'
          },
          {
            type: 'Evidence image',
            title: 'Digital skeletal reconstruction',
            description: 'Source page, creator details and reuse licence for the skeletal diagram.',
            access: 'CC BY 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:Digital_skeletal_reconstruction_of_Spinosaurus.png'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38598'
          }
        ],
        limitations: 'The coverage band describes the combined neotype, holotype record and referred material at genus level. It is an editorial evidence summary, not a published completeness percentage.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  stegosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name, type species and species limits',
      'geological age and formation',
      'name-bearing and principal referred specimens',
      'plate and spike arrangement',
      'profile narrative and residual uncertainty'
    ],
    record: {
      period: 'Late Jurassic',
      mya: 'Kimmeridgian–Tithonian, about 155–150 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Stegosauria', 'Stegosauridae', 'Stegosaurus'],
      diet: 'Herbivore',
      locomotion: 'Quadrupedal',
      description: 'Stegosaurus was a large stegosaur from the Morrison Formation, known from multiple species and many partial to nearly complete skeletons, including articulated plates and tail spikes.',
      facts: [
        'The type species is S. stenops, fixed by the ICZN in 2013 because the original type species S. armatus rested on undiagnostic material.',
        'The holotype of S. stenops, USNM 4934, is a nearly complete articulated skeleton with plates in place, collected at Garden Park, Colorado, in 1886.',
        'NHMUK PV R36730 ("Sophie"), described in 2015, is the most complete individual known, with about 85 per cent of the skeleton.',
        'Plate and spike positions are directly supported by articulated specimens: two staggered rows of plates and two pairs of tail spikes.',
        'Thermoregulation, display and species recognition have all been proposed for plates; no single exclusive function is established.'
      ]
    },
    presentation: {
      heroLead: 'The plate-backed icon of the Late Jurassic, known from articulated skeletons that fix the arrangement of its plates and spikes even though their purpose is still argued over.',
      heroMedia: {
        file: 'Stegosaurus stenops sophie wiki martyniuk.png',
        title: 'Life restoration of Stegosaurus stenops',
        alt: 'Life restoration of Stegosaurus stenops based on the Sophie specimen',
        caption: 'Life restoration by Matthew Martyniuk based on the "Sophie" specimen NHMUK PV R36730. Colour and skin texture are interpretive.',
        credit: 'Matthew Martyniuk · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stegosaurus_stenops_sophie_wiki_martyniuk.png'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Jurassic · about 155–150 Ma' },
        { label: 'Location', value: 'Western USA; Portugal' },
        { label: 'Known size', value: 'about 7–9 m · 3.5–5 t' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Stegosaurus was a large four-legged plant-eater of the Late Jurassic floodplains of western North America. Adults reached seven to nine metres, with a small, narrow head held low, a high arched back, and a double row of broad, upright bony plates running from neck to tail.',
        'The tail ended in two pairs of long spikes. Healed injuries on Allosaurus bones matching those spikes, and damaged spikes on Stegosaurus itself, show that the tail was a real weapon. The plates, by contrast, were thin and richly supplied with blood vessels, suggesting display or temperature control rather than defence.',
        'Because several skeletons are preserved with the plates in position, the arrangement of the armour is unusually well established for a dinosaur. What remains open is why the plates existed, how many species the Morrison sample represents, and how the animal fed with so small a head.'
      ],
      animalHighlights: [
        'Seventeen to twenty-two plates in two alternating rows, confirmed by articulated skeletons.',
        'Two pairs of tail spikes, with matching puncture wounds known on Allosaurus bones.',
        'A tiny brain and narrow beaked skull on a body weighing several tonnes.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'Low browser',
          level: 'Supported by skull and teeth',
          reason: 'A toothless beak and small leaf-shaped teeth suggest cropping soft, low vegetation; bite-force models indicate a weak but adequate bite.'
        },
        {
          label: 'Movement',
          value: 'Quadrupedal',
          level: 'Supported by articulated limbs',
          reason: 'Short forelimbs and long hindlimbs produced a high-backed posture; a rearing feeding pose has been suggested but not demonstrated.'
        },
        {
          label: 'Known size',
          value: 'about 7–9 m long',
          level: 'Well constrained',
          reason: 'Several substantially complete skeletons are known; the 5.6 m Sophie was a young adult.'
        },
        {
          label: 'Appearance',
          value: 'Armour arrangement confirmed',
          level: 'Plate covering reconstructed',
          reason: 'Plate and spike positions are preserved in articulation; the keratin sheath over the plates and skin colour are inferred.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Jurassic (Kimmeridgian–Tithonian)' },
        { label: 'Approximate age', value: 'about 155–150 million years ago' },
        { label: 'Rock unit', value: 'Morrison Formation' },
        { label: 'Type locality', value: 'Garden Park, Fremont County, Colorado, USA' }
      ],
      locality: {
        name: 'Garden Park',
        region: 'Fremont County, Colorado, USA',
        note: 'Morrison Formation, type locality of S. stenops. Referred material comes from Wyoming, Utah and Colorado, with S. stenops also reported from Portugal. The map shows a regional reference.'
      },
      classificationSummary: 'Stegosaurus is the name-bearing genus of Stegosauria and Stegosauridae. Its closest relatives include Hesperosaurus from the Morrison Formation and Miragaia and Dacentrurus from Europe; Kentrosaurus from Tanzania is a more distant, spikier cousin.',
      related: [
        { id: 'kentrosaurus', reason: 'A smaller, spike-heavy African stegosaur of similar age.' },
        { id: 'hesperosaurus', reason: 'A close Morrison relative with lower, longer plates.' },
        { id: 'allosaurus', reason: 'The predator whose bones carry Stegosaurus spike wounds.' }
      ],
      questions: [
        {
          title: 'What were the plates for?',
          copy: 'Their thinness and blood supply rule out heavy armour. Display, species recognition and heat exchange are the main candidates and may all have applied.'
        },
        {
          title: 'How many species?',
          copy: 'S. stenops and S. ungulatus are generally accepted; other named species rest on poorer material and their validity is debated.'
        },
        {
          title: 'Could it rear up to feed?',
          copy: 'A tripodal posture using the tail has been proposed to reach higher browse. Limb and tail mechanics leave this possible but unproven.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'Core species are Kimmeridgian–Tithonian Morrison Formation; species ranges within the formation differ.',
    sources: [
      { type: 'systematics', citation: 'Maidment et al. (2008), Systematics and phylogeny of Stegosauria', url: 'https://doi.org/10.1017/S1477201908002459' },
      { type: 'osteology', citation: 'Maidment et al. (2015), The postcranial skeleton of an exceptionally complete individual of Stegosaurus stenops', url: 'https://doi.org/10.1371/journal.pone.0138352' },
      { type: 'body-mass', citation: 'Brassey et al. (2015), Body-mass estimate for an exceptionally complete Stegosaurus', url: 'https://doi.org/10.1098/rsbl.2014.0984' },
      { type: 'nomenclature', citation: 'ICZN (2013), Opinion 2320: Stegosaurus stenops designated as type species', url: 'https://www.biotaxa.org/bzn/article/view/38493' },
      { type: 'original-description', citation: 'Marsh (1887), Principal characters of American Jurassic dinosaurs, Part IX: the skull and dermal armor of Stegosaurus', url: 'https://doi.org/10.2475/ajs.s3-34.203.413' }
    ],
    residualUncertainty: [
      'Species taxonomy within the Morrison sample is debated.',
      'Plate function remains unresolved.',
      'The keratinous covering of the plates is inferred rather than preserved.',
      'Feeding height and posture are interpretive.'
    ],
    evidence: {
      score: 98,
      summary: 'Many skeletons and skulls, several articulated with plates and tail spikes in place, make Stegosaurus one of the best-known ornithischians; the open questions concern function and species limits.',
      material: 'Holotype of S. stenops USNM 4934 with articulated plates, the 85 per cent complete NHMUK PV R36730, numerous partial skeletons and skulls from the Morrison Formation, and isolated plates and spikes.',
      formations: ['Morrison Formation — Colorado, Wyoming and Utah, USA', 'Lourinhã Formation — Portugal (referred S. stenops material)'],
      confidenceLimit: 'Anatomy and armour arrangement are secure; keep the species separate and do not state one plate function as fact.',
      sourceBasis: 'Marsh 1887, Maidment et al. 2008/2015, Brassey et al. 2015 and ICZN Opinion 2320.',
      specimens: [
        { name: 'Holotype of S. stenops', id: 'USNM 4934', institution: 'Smithsonian National Museum of Natural History', note: 'Nearly complete articulated skeleton with plates in position, found by Marshall Felch at Garden Park in 1886.' },
        { name: '"Sophie"', id: 'NHMUK PV R36730', institution: 'Natural History Museum, London', note: 'About 85 per cent complete young adult from Red Canyon Ranch, Wyoming; the most complete Stegosaurus known.' },
        { name: 'Holotype of S. ungulatus', id: 'YPM 1853', institution: 'Yale Peabody Museum', note: 'Partial skeleton from Como Bluff, Wyoming, described by Marsh in 1879.' }
      ],
      uncertainties: ['species limits', 'plate function', 'feeding posture'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'Articulated skeletons with the plates and spikes still in place.',
        standfirst: 'Stegosaurus is known from dozens of Morrison Formation specimens, including the articulated holotype of S. stenops and the 85 per cent complete "Sophie". Few dinosaurs have their armour arrangement so directly documented.',
        coverage: {
          label: 'Excellent',
          level: 4,
          maximum: 4,
          basis: 'Complete skulls, full vertebral series, limbs, and plates and spikes preserved in articulation are known from several individuals.'
        },
        metrics: [
          { label: 'Known remains', value: 'Near-complete skeletons' },
          { label: 'Individuals', value: 'Dozens' },
          { label: 'Key limitation', value: 'Species limits debated' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'Complete skulls with beaks and teeth, vertebral columns, girdles and limbs, and the full set of dermal plates and tail spikes, preserved in life position in the holotype and in several other articulated skeletons; also throat ossicles and, in one specimen, skin impressions.',
          note: 'The plates were covered in life by a horny sheath that is not preserved, so their true size and outline were somewhat larger than the bone.'
        },
        media: [
          {
            file: 'Journal.pone.0138352.g001A.jpg',
            kind: 'Mounted specimen',
            title: 'NHMUK PV R36730 ("Sophie") mounted at the Natural History Museum',
            alt: 'Mounted skeleton of the Stegosaurus stenops specimen NHMUK PV R36730 in right lateral view',
            caption: 'The most complete Stegosaurus known, as figured in the 2015 description. About 85 per cent of the skeleton is original bone.',
            credit: 'Maidment et al. 2015 · CC BY 4.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Journal.pone.0138352.g001A.jpg'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'Several complete skulls with the narrow beak, small leaf-shaped teeth and braincase; the holotype skull is among the best.' },
          { label: 'Vertebral column', value: 'Complete cervical, dorsal, sacral and caudal series with ribs and chevrons in multiple specimens.' },
          { label: 'Girdles and limbs', value: 'Pectoral and pelvic girdles, forelimbs, hindlimbs and feet; hands are less often complete.' },
          { label: 'Exceptional preservation', value: 'Plates and spikes in articulation; throat ossicles; a skin impression associated with one specimen; spike-wound pathologies on Allosaurus.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'USNM 4934 · holotype of S. stenops',
            description: 'A nearly complete, articulated skeleton with plates in position, found by Marshall Felch at Garden Park, Colorado, in 1886 and named by Marsh in 1887. Since 2013 S. stenops has been the type species of the genus.',
            meta: 'Garden Park, Colorado · Morrison Formation · Smithsonian National Museum of Natural History'
          },
          {
            kicker: 'Most complete specimen',
            title: 'NHMUK PV R36730 · "Sophie"',
            description: 'A young adult about 5.6 m long from Red Canyon Ranch, Wyoming, excavated in 2003–2004 and described in 2015. Its completeness allowed the first rigorous volumetric mass estimate for the genus.',
            meta: 'Red Canyon Ranch, Wyoming · Morrison Formation · Natural History Museum, London'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'Multiple articulated skeletons with plates and spikes in life position, complete skulls, and predator bones bearing spike wounds.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A large low-browsing stegosaur whose tail spikes were functional weapons and whose plates served display and possibly thermoregulatory roles.'
          },
          {
            label: 'Still unknown',
            value: 'The primary function of the plates, how many species the sample contains, and whether it could rear to feed.'
          }
        ],
        resources: [
          {
            type: 'Osteology',
            title: 'Maidment et al. · 2015',
            description: 'Full postcranial description of the Sophie specimen.',
            access: 'Open access',
            url: 'https://doi.org/10.1371/journal.pone.0138352'
          },
          {
            type: 'Systematics',
            title: 'Maidment et al. · 2008',
            description: 'Revision of stegosaur species and phylogeny.',
            access: 'DOI record',
            url: 'https://doi.org/10.1017/S1477201908002459'
          },
          {
            type: 'Body mass',
            title: 'Brassey et al. · 2015',
            description: 'Volumetric mass estimate for NHMUK PV R36730.',
            access: 'DOI record',
            url: 'https://doi.org/10.1098/rsbl.2014.0984'
          },
          {
            type: 'Nomenclature',
            title: 'ICZN Opinion 2320 · 2013',
            description: 'Designation of S. stenops as the type species of Stegosaurus.',
            access: 'DOI record',
            url: 'https://www.biotaxa.org/bzn/article/view/38493'
          },
          {
            type: 'Evidence image',
            title: 'Sophie mount photograph',
            description: 'Source page, creator details and reuse licence for the figure.',
            access: 'CC BY 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:Journal.pone.0138352.g001A.jpg'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38814'
          }
        ],
        limitations: 'The coverage band describes the combined Morrison sample at genus level. It is an editorial evidence summary, not a published completeness percentage.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  },
  brachiosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-09-19',
    reviewer: 'Dinosauria editorial review',
    consensusScope: [
      'accepted name and separation from Giraffatitan',
      'geological age and formation',
      'name-bearing and referred material',
      'body-size confidence',
      'profile narrative and residual uncertainty'
    ],
    record: {
      period: 'Late Jurassic',
      mya: 'Kimmeridgian–Tithonian, about 154–150 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Neosauropoda', 'Macronaria', 'Titanosauriformes', 'Brachiosauridae', 'Brachiosaurus'],
      diet: 'Herbivore',
      locomotion: 'Quadrupedal',
      description: 'Brachiosaurus altithorax was a brachiosaurid sauropod from the Morrison Formation of Colorado. Its holotype is a partial postcranial skeleton; the well-known African skeletons once called Brachiosaurus brancai belong to the separate genus Giraffatitan.',
      facts: [
        'The holotype FMNH P 25107 was found by Elmer Riggs\'s team in 1900 near Fruita, Colorado, and described in 1903; it comprises dorsal and sacral vertebrae, ribs, a coracoid, humerus, ilium and femur.',
        'No skull is confidently associated with B. altithorax; a Morrison skull (USNM 5730) once assigned to Camarasaurus may belong to Brachiosaurus but is not from the holotype.',
        'Long forelimbs and a high shoulder are supported by the holotype, while many popular details derive from Giraffatitan and must not be transferred uncritically.',
        'Taylor\'s 2009 re-evaluation formalised the separation of the Tanzanian material as Giraffatitan brancai.',
        'Referred Morrison material is limited and some referrals are debated.'
      ]
    },
    presentation: {
      heroLead: 'The high-shouldered giant of the Morrison Formation, known from one partial skeleton that anchors a name long applied, wrongly, to more complete African relatives.',
      heroMedia: {
        file: 'Brachiosaurus DB.jpg',
        title: 'Life restoration of Brachiosaurus altithorax',
        alt: 'Life restoration of Brachiosaurus altithorax in side view',
        caption: 'Life restoration by Dmitry Bogdanov following a published skeletal reconstruction. Neck length, skull and skin are partly inferred from relatives.',
        credit: 'Dmitry Bogdanov · public domain',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Brachiosaurus_DB.jpg'
      },
      quickFacts: [
        { label: 'Age', value: 'Late Jurassic · about 154–150 Ma' },
        { label: 'Location', value: 'Colorado and Utah, USA' },
        { label: 'Known size', value: 'about 20–22 m · 30–60 t' },
        { label: 'Diet', value: 'Herbivore' }
      ],
      animalParagraphs: [
        'Brachiosaurus was one of the largest animals of the Late Jurassic, a sauropod with forelimbs longer than its hindlimbs, a steeply sloping back and a neck that could be raised well above the shoulders. The holotype suggests an animal around twenty metres long and several tens of tonnes in weight.',
        'It lived on the seasonally dry floodplains of the Morrison Formation alongside Apatosaurus, Diplodocus and Camarasaurus, and probably browsed higher in the canopy than those flatter-backed neighbours. Its teeth were spoon-shaped and its nostrils sat high on the skull, if the referred skull is correctly assigned.',
        'Much of what the public knows as Brachiosaurus, including the famous mounted skeleton in Berlin, is actually Giraffatitan from Tanzania. The North American animal itself is known from a single partial skeleton and a handful of other bones, so its proportions are less secure than its fame suggests.'
      ],
      animalHighlights: [
        'Forelimbs longer than the hindlimbs, giving a high shoulder and a back that sloped down to the hips.',
        'A deep, broad ribcage indicated by the holotype\'s dorsal vertebrae; the species name means "deep chest".',
        'One of the heaviest Morrison dinosaurs, although no complete individual allows a precise mass.'
      ],
      lifeCards: [
        {
          label: 'Feeding',
          value: 'High browser',
          level: 'Inferred from build and relatives',
          reason: 'Long forelimbs and neck suggest feeding in tree canopies; the spoon-shaped teeth are known from the referred skull and from Giraffatitan.'
        },
        {
          label: 'Movement',
          value: 'Quadrupedal',
          level: 'Supported by holotype limb bones',
          reason: 'The humerus and femur of the holotype establish its columnar, four-legged stance and unusual limb proportions.'
        },
        {
          label: 'Known size',
          value: 'about 20–22 m long',
          level: 'Estimate from one partial skeleton',
          reason: 'Length and mass are scaled from the holotype using proportions borrowed from Giraffatitan; estimates span 30 to 60 tonnes.'
        },
        {
          label: 'Appearance',
          value: 'Body plan established',
          level: 'Skull and neck reconstructed',
          reason: 'No skull is certainly associated and the neck is not preserved in the holotype; both follow related genera.'
        }
      ],
      whereFacts: [
        { label: 'Interval', value: 'Late Jurassic (Kimmeridgian–Tithonian)' },
        { label: 'Approximate age', value: 'about 154–150 million years ago' },
        { label: 'Rock unit', value: 'Morrison Formation (Brushy Basin Member)' },
        { label: 'Type locality', value: 'Riggs Hill, near Fruita, Mesa County, Colorado, USA' }
      ],
      locality: {
        name: 'Riggs Hill',
        region: 'Mesa County, Colorado, USA',
        note: 'Morrison Formation, Grand River Valley. Referred material comes from other Colorado and Utah sites. The map shows a regional reference.'
      },
      classificationSummary: 'Brachiosaurus is the name-bearing genus of Brachiosauridae within Titanosauriformes. Giraffatitan, once treated as a species of Brachiosaurus, is now a separate genus; other brachiosaurids include Lusotitan from Portugal and Sonorasaurus from Arizona.',
      related: [
        { id: 'giraffatitan', reason: 'The far more complete Tanzanian relative long confused with it.' },
        { id: 'camarasaurus', reason: 'A common Morrison macronarian with a similar skull type.' },
        { id: 'diplodocus', reason: 'A contemporary sauropod with the opposite body plan: low shoulders and a whip tail.' }
      ],
      questions: [
        {
          title: 'What did its skull look like?',
          copy: 'A Morrison skull once assigned to Camarasaurus is probably brachiosaurid and may be Brachiosaurus, but it is not associated with the holotype.'
        },
        {
          title: 'How big was it really?',
          copy: 'With only one partial skeleton, length and mass depend on assumptions borrowed from Giraffatitan. Estimates range widely.'
        },
        {
          title: 'How much referred material is Brachiosaurus?',
          copy: 'Several Morrison specimens have been referred to the genus on limb proportions alone; some of these referrals are questioned.'
        }
      ],
      compactSources: true
    },
    ageReviewNote: 'The holotype is Kimmeridgian within the Brushy Basin Member of the Morrison Formation.',
    sources: [
      { type: 'original-description', citation: 'Riggs (1903), Brachiosaurus altithorax, the largest known dinosaur', url: 'https://doi.org/10.2475/ajs.s4-15.88.299' },
      { type: 'systematic-revision', citation: 'Taylor (2009), A re-evaluation of Brachiosaurus altithorax Riggs 1903 and its generic separation from Giraffatitan brancai', url: 'https://doi.org/10.1671/039.029.0309' },
      { type: 'nomenclatural-correction', citation: 'Taylor (2011), Correction: the genus name Giraffatitan', url: 'https://doi.org/10.1080/02724634.2011.557115' },
      { type: 'museum-synthesis', citation: 'Natural History Museum, Brachiosaurus', url: 'https://www.nhm.ac.uk/discover/dino-directory/brachiosaurus.html' }
    ],
    residualUncertainty: [
      'Few specimens are securely referable to B. altithorax.',
      'African Giraffatitan material must be excluded from descriptions of the genus.',
      'No skull or neck is associated with the holotype.',
      'Maximum size and mass are extrapolations from one partial skeleton.'
    ],
    evidence: {
      score: 66,
      summary: 'One principal partial postcranial skeleton establishes the distinctive body plan, but the skull, neck and most of the limbs are unknown or referred, and the famous complete skeletons belong to Giraffatitan.',
      material: 'Holotype FMNH P 25107: seven dorsal vertebrae, sacrum, two caudal vertebrae, ribs, right coracoid, right humerus, right ilium and right femur; plus limited referred Morrison material.',
      formations: ['Morrison Formation, Brushy Basin Member — Colorado and Utah, USA'],
      confidenceLimit: 'The basic postcranial build is supported; skull, neck completeness, maximum size and species variation are poorly constrained.',
      sourceBasis: 'Riggs 1903/1904, Taylor 2009/2011 and the Natural History Museum synthesis.',
      specimens: [
        { name: 'Holotype', id: 'FMNH P 25107', institution: 'Field Museum of Natural History', note: 'Partial postcranial skeleton excavated by Riggs in 1900 at Riggs Hill near Fruita, Colorado.' },
        { name: 'Referred skull', id: 'USNM 5730', institution: 'Smithsonian National Museum of Natural History', note: 'Morrison skull from Garden Park, Colorado; brachiosaurid and possibly Brachiosaurus, but not associated with the holotype.' }
      ],
      uncertainties: ['single partial skeleton', 'Giraffatitan confusion', 'skull association', 'maximum size'],
      panel: {
        eyebrow: 'Fossil evidence',
        headline: 'One partial skeleton from Colorado carries the whole genus.',
        standfirst: 'Brachiosaurus altithorax rests on a single partial postcranial skeleton excavated in 1900. Its unusual limb proportions are directly preserved, but the skull, neck and most of the rest of the animal are known only from referred bones or from the separate genus Giraffatitan.',
        coverage: {
          label: 'Moderate',
          level: 2,
          maximum: 4,
          basis: 'Trunk vertebrae, sacrum, one humerus, one femur and girdle elements are preserved; the skull, neck, tail and most limb bones are missing from the holotype.'
        },
        metrics: [
          { label: 'Known remains', value: 'Partial postcranial skeleton' },
          { label: 'Individuals', value: '1 principal' },
          { label: 'Key limitation', value: 'No associated skull or neck' }
        ],
        knownRemains: {
          title: 'What is actually preserved?',
          summary: 'The holotype preserves seven dorsal vertebrae, the sacrum, two caudal vertebrae, ribs, the right coracoid, right humerus, right ilium and right femur. Referred material adds a possible skull, isolated vertebrae and limb bones from other Morrison sites.',
          note: 'Riggs excavated the skeleton from a hillside near Fruita; erosion had already removed the front and much of the rear of the animal before discovery.'
        },
        media: [
          {
            file: 'Brachiosaurus fifth presacral.jpg',
            kind: 'Type material',
            title: 'Fifth presacral vertebra of the holotype FMNH P 25107',
            alt: 'Photograph of a dorsal vertebra of the Brachiosaurus altithorax holotype in right lateral view',
            caption: 'A dorsal vertebra of the holotype, photographed at the Field Museum. The tall, deep trunk vertebrae gave the species its name, "deep chest".',
            credit: 'Mike Taylor · CC BY 4.0',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Brachiosaurus_fifth_presacral.jpg'
          }
        ],
        materialGroups: [
          { label: 'Skull and jaws', value: 'None with the holotype. USNM 5730 from Garden Park is a brachiosaurid skull that may belong to the genus.' },
          { label: 'Vertebral column', value: 'Seven dorsal vertebrae, the sacrum and two caudal vertebrae in the holotype; no cervical vertebrae.' },
          { label: 'Girdles and limbs', value: 'Right coracoid, humerus, ilium and femur in the holotype; other limb bones referred from separate sites.' },
          { label: 'Exceptional preservation', value: 'None. No skin, colour or gut contents are known.' }
        ],
        specimenCards: [
          {
            kicker: 'Name-bearing specimen',
            title: 'FMNH P 25107 · holotype',
            description: 'Found by H. W. Menke of Elmer Riggs\'s Field Columbian Museum expedition in 1900 on a hill near Fruita, Colorado, and described by Riggs in 1903 as the largest known dinosaur. The humerus alone is over two metres long.',
            meta: 'Riggs Hill, Mesa County, Colorado · Morrison Formation · Field Museum of Natural History'
          },
          {
            kicker: 'Excluded material',
            title: 'Giraffatitan brancai',
            description: 'The mounted skeletons from Tendaguru, Tanzania, were described as Brachiosaurus brancai in 1914 and long defined the public image of the genus. Since 2009 they are treated as the separate genus Giraffatitan and must not be used to fill gaps in B. altithorax.',
            meta: 'Tendaguru Formation · Museum für Naturkunde, Berlin'
          }
        ],
        interpretation: [
          {
            label: 'Directly observed',
            value: 'Deep dorsal vertebrae, a sacrum, a long humerus and a femur from one individual, establishing the high-shouldered sauropod body plan.'
          },
          {
            label: 'Scientific interpretation',
            value: 'A very large brachiosaurid high browser, distinct from its African relative in vertebral and limb proportions.'
          },
          {
            label: 'Still unknown',
            value: 'The skull and neck, the tail, precise size and mass, and how many Morrison bones truly belong to the genus.'
          }
        ],
        resources: [
          {
            type: 'Primary description',
            title: 'Riggs · 1903',
            description: 'Original naming of Brachiosaurus altithorax.',
            access: 'DOI record',
            url: 'https://doi.org/10.2475/ajs.s4-15.88.299'
          },
          {
            type: 'Systematic revision',
            title: 'Taylor · 2009',
            description: 'Re-evaluation of the holotype and separation of Giraffatitan.',
            access: 'DOI record',
            url: 'https://doi.org/10.1671/039.029.0309'
          },
          {
            type: 'Evidence image',
            title: 'Holotype vertebra photograph',
            description: 'Source page, creator details and reuse licence for the image.',
            access: 'CC BY 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:Brachiosaurus_fifth_presacral.jpg'
          },
          {
            type: 'Occurrence data',
            title: 'Paleobiology Database',
            description: 'Independent occurrence and stratigraphic context; not a skeletal-completeness measure.',
            access: 'Open dataset',
            url: 'https://paleobiodb.org/navigator/?taxon_id=38677'
          }
        ],
        limitations: 'The coverage band describes the holotype plus securely referred material at genus level. It is an editorial evidence summary, not a published completeness percentage, and it deliberately excludes Giraffatitan.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  }
};
