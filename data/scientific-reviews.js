/* Editorial scientific-review ledger.
   A profile belongs here only after its core claims have been checked against
   primary literature or an authoritative taxonomic/museum source. Automated
   imports, PBDB range comparisons and AI-drafted prose never set this status. */
window.SCIENTIFIC_REVIEWS = {
  afrovenator: {
    status: 'reviewed',
    reviewedOn: '2026-07-16',
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
      uncertainties: ['one principal individual', 'formation age', 'megalosaurid position']
    }
  },
  alamosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-07-16',
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
      uncertainties: ['referred-material limits', 'Utetitan proposal', 'maximum size', 'osteoderm arrangement']
    }
  },
  ammosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-07-16',
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
      uncertainties: ['subjective synonymy', 'early sauropodomorph position']
    }
  },
  ampelosaurus: {
    status: 'reviewed',
    reviewedOn: '2026-07-16',
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
      uncertainties: ['multi-individual association', 'possible second titanosaur', 'osteoderm arrangement', 'maximum size']
    }
  },
  amygdalodon: {
    status: 'reviewed',
    reviewedOn: '2026-07-16',
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
      uncertainties: ['mixed assemblage', 'formation age resolution', 'diagnostic limits', 'body size']
    }
  }
};
