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
            url: 'https://paleobiodb.org/classic/checkTaxonInfo?taxon_name=Afrovenator'
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
            url: 'https://paleobiodb.org/classic/checkTaxonInfo?taxon_name=Alamosaurus'
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
            url: 'https://paleobiodb.org/classic/checkTaxonInfo?taxon_name=Anchisaurus'
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
            url: 'https://paleobiodb.org/classic/checkTaxonInfo?taxon_name=Ampelosaurus'
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
            url: 'https://paleobiodb.org/classic/checkTaxonInfo?taxon_name=Amygdalodon'
          }
        ],
        limitations: 'The coverage band describes the securely referred material at genus level. It is an editorial evidence summary, not a published completeness percentage.',
        reviewedLabel: 'Primary description checked · 19 September 2026'
      }
    }
  }
};
