/* Scientific review batch: genera M-R.
   Claims are deliberately limited to what the cited record can support. */
(function () {
  const scope = [
    'accepted name and taxonomic status',
    'geological age and formation',
    'known material and skeletal completeness',
    'broad classification',
    'size, diet and locomotion confidence',
    'major scientific uncertainty'
  ];
  const P = (citation, url, type = 'primary-literature') => ({ type, citation, url });
  const N = id => ({ type: 'authoritative-museum', citation: `Natural History Museum Dino Directory: ${id}`, url: `https://www.nhm.ac.uk/discover/dino-directory/${id}.html` });
  const R = (record, ageReviewNote, sources, residualUncertainty, evidence, status = 'reviewed') => ({
    status,
    reviewedOn: '2026-07-16',
    reviewer: 'Dinosauria editorial review',
    consensusScope: scope,
    record,
    ageReviewNote,
    sources,
    residualUncertainty,
    evidence
  });

  window.SCIENTIFIC_REVIEW_BATCH_M_R = {
    mamenchisaurus: R({
      period: 'Middle-Late Jurassic', mya: 'about 168-157 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Eusauropoda', 'Mamenchisauridae'],
      description: 'Mamenchisaurus is a historically broad genus of long-necked Chinese eusauropods. The type species M. constructus is based on a partial skeleton from the Sichuan Basin; other named species differ greatly in completeness and may not form a natural genus.',
      facts: ['Several species preserve substantial skeletons, but no single completeness claim applies to the whole genus.', 'The extraordinary neck length is directly supported in some species; the largest whole-body estimates depend on scaling incomplete individuals.', 'A 2023 analysis recovered named Mamenchisaurus species in a non-monophyletic series, requiring genus-level revision.']
    }, 'The range is restricted to well-supported Middle-Late Jurassic Chinese species; Early Cretaceous and non-Chinese referrals are not used to extend it.', [
      P('Moore et al. (2023), reassessment of Mamenchisaurus sinocanadorum and long-neck evolution', 'https://doi.org/10.1080/14772019.2023.2171818'), N('mamenchisaurus')
    ], ['Species-level assignments and the limits of the genus remain unsettled.', 'Maximum size is poorly constrained for the most fragmentary species.'], {
      score: 58, material: 'Type species represented by a partial skeleton; other referred species range from fragmentary to substantial articulated skeletons.', formations: 'Sichuan Basin units including the Shaximiao succession; additional Chinese species occur in other Jurassic units.', confidenceLimit: 'Do not combine measurements or anatomy from different species into one individual.', uncertainties: ['genus is probably non-monophyletic', 'largest sizes rely on extrapolation']
    }),

    masiakasaurus: R({
      period: 'Late Cretaceous', mya: 'late Maastrichtian, about 70-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Ceratosauria', 'Abelisauroidea', 'Noasauridae'],
      description: 'Masiakasaurus knopfleri was a small noasaurid theropod from the Maevarano Formation of Madagascar, known from disarticulated material collectively representing much of the skeleton but not one complete individual.',
      facts: ['Combined specimens preserve roughly two-thirds of the skeleton; the 2002 sample described about 40%.', 'Its front teeth project forward and differ from the rear dentition.', 'Diet was carnivorous, but proposed specialisations for small prey or fish remain functional hypotheses.']
    }, 'The Maevarano Formation sample is late Maastrichtian, not a Campanian-Maastrichtian range.', [
      P('Carrano, Sampson & Forster (2002), osteology of Masiakasaurus', 'https://doi.org/10.1671/0272-4634(2002)022%5B0510:TOOMKA%5D2.0.CO;2'), N('masiakasaurus')
    ], ['The association of isolated bones and exact prey preference remain uncertain.'], {
      score: 74, material: 'Many disarticulated cranial and postcranial elements from multiple individuals; collectively much of the skeleton.', formations: 'Maevarano Formation, Mahajanga Basin, Madagascar.', confidenceLimit: 'Composite completeness must not be described as a complete skeleton.', uncertainties: ['feeding specialisation is inferred', 'individual association is limited']
    }),

    maxakalisaurus: R({
      period: 'Late Cretaceous', mya: 'probably Campanian-Maastrichtian, about 84-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria'],
      description: 'Maxakalisaurus topai was a titanosaur from the Adamantina Formation of Brazil. The holotype is a disarticulated partial skeleton with limited cranial material and osteoderms; additional jaw and tooth material has been referred from the type locality.',
      facts: ['The type includes vertebrae, limb and girdle bones, skull fragments and osteoderms.', 'A referred dentary and teeth expanded knowledge of its feeding anatomy.', 'Precise placement within derived Titanosauria varies among analyses.']
    }, 'The Adamantina Formation is not uniformly dated to a single 80 Ma point; a broad Late Cretaceous interval is more defensible.', [
      P('Franca et al. (2016), new jaw and teeth referred to Maxakalisaurus', 'https://doi.org/10.7717/peerj.2054'), N('maxakalisaurus')
    ], ['The formation age and association of the referred jaw remain imperfectly constrained.', 'The original National Museum material was affected by the 2018 fire and its present condition requires collection-level confirmation.'], {
      score: 52, material: 'Disarticulated partial skeleton plus referred dentary and teeth.', formations: 'Adamantina Formation, Bauru Group, Minas Gerais, Brazil.', confidenceLimit: 'A precise body length or narrow age is not securely supported.', uncertainties: ['phylogenetic position', 'formation age', 'status of fire-affected specimens']
    }),

    melanorosaurus: R({
      period: 'Late Triassic', mya: 'Norian, about 227-208 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropodiformes'],
      description: 'Melanorosaurus readi is a large non-sauropodan sauropodomorph from the lower Elliot Formation of South Africa. Its name-bearing series is incomplete and historically confused with other Elliot sauropodomorph material.',
      facts: ['A modern redescription designated a lectotype from the original syntype material.', 'The well-known skull once assigned to Melanorosaurus was not part of the type and should not be used uncritically in reconstructions.', 'Its robust limbs support habitual terrestrial quadrupedal capacity, while exact gait remains biomechanically debated.']
    }, 'The type material is from the lower Elliot Formation and is treated as Norian; older generic ranges assembled from referrals are not accepted.', [
      P('McPhee et al. (2024), osteology and lectotype designation for Melanorosaurus readi', 'https://doi.org/10.1080/02724634.2024.2337802'), P('Peyre de Fabregues & Allain (2016), revision of Melanorosaurus-related material', 'https://doi.org/10.7717/peerj.1639')
    ], ['The referral of several historical specimens remains unresolved.', 'Its exact position close to Sauropoda varies among matrices.'], {
      score: 51, material: 'Fragmentary name-bearing postcranial material, with additional historical referrals of unequal security.', formations: 'Lower Elliot Formation, South Africa.', confidenceLimit: 'Do not combine the famous referred skull and all postcrania as one complete animal.', uncertainties: ['referred material', 'precise phylogenetic position']
    }),

    micropachycephalosaurus: R({
      period: 'Late Cretaceous', mya: 'Campanian, about 84-72 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Cerapoda incertae sedis'],
      description: 'Micropachycephalosaurus hongtuyanensis is a very fragmentary small ornithischian from the Wangshi Group of Shandong, China. Redescription found it diagnosable but found no character demonstrating that it was a pachycephalosaur.',
      facts: ['The holotype consists principally of incomplete vertebral, pelvic and hindlimb material.', 'Purported skull-roof bones could not be located for the modern revision.', 'The name does not establish a tiny dome-headed dinosaur; its position within Cerapoda is unresolved.']
    }, 'The reviewed age follows the Campanian assignment of the Wangshi material; a narrower numerical range is not justified.', [
      P('Butler & Zhao (2009), redescription of Micropachycephalosaurus and Wannanosaurus', 'https://doi.org/10.1016/j.cretres.2008.03.002'), N('micropachycephalosaurus')
    ], ['Its relationships cannot be resolved from the surviving material.', 'Some originally mentioned elements are missing.'], {
      score: 22, material: 'Extremely fragmentary postcranial holotype; reported skull-roof elements unavailable.', formations: 'Wangshi Group, Shandong, China.', confidenceLimit: 'Body shape, skull ornament and size beyond the preserved bones are mostly unknown.', uncertainties: ['Cerapoda position', 'missing elements']
    }),

    monolophosaurus: R({
      period: 'Middle Jurassic', mya: 'Callovian, about 166-163 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae'],
      description: 'Monolophosaurus jiangi was a medium-sized basal tetanuran from the Shishugou Formation of Xinjiang, represented by one unusually complete partial skeleton with a nearly complete crested skull.',
      facts: ['The holotype preserves a high proportion of the skull and postcranium but is not a complete skeleton.', 'The midline cranial crest is directly preserved; its display function is plausible but untested.', 'Analyses consistently place it near the base of Tetanurae rather than within Allosauroidea or Megalosauroidea.']
    }, 'The type horizon in the Shishugou Formation is Callovian; the very broad NHM interval is replaced with formation-level dating.', [
      P('Brusatte et al. (2010), cranial redescription of Monolophosaurus', 'https://doi.org/10.1111/j.1096-3642.2009.00563.x'), N('monolophosaurus')
    ], ['Only one individual is securely known.', 'Soft-tissue appearance and crest function are unknown.'], {
      score: 76, material: 'Single partial skeleton with a nearly complete skull and substantial axial and appendicular remains.', formations: 'Shishugou Formation, Xinjiang, China.', confidenceLimit: 'Population variation and adult size cannot be assessed from one specimen.', uncertainties: ['crest function', 'fine phylogenetic position']
    }),

    mussaurus: R({
      period: 'Early Jurassic', mya: 'Sinemurian, about 193 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Massopoda'],
      description: 'Mussaurus patagonicus was a sauropodomorph from the Laguna Colorada Formation of Patagonia, known from eggs, hatchlings, juveniles and adults. The name was coined from tiny juveniles, but adults were much larger.',
      facts: ['A growth series documents major changes from quadrupedal hatchlings to predominantly bipedal adults.', 'Egg clutches and age-segregated groups provide strong evidence of colonial nesting and social aggregation.', 'Herbivory is inferred from sauropodomorph anatomy; exact plant selection is unknown.']
    }, 'Radiometric and stratigraphic work places the nesting locality in the Early Jurassic, not the Late Triassic.', [
      P('Pol et al. (2021), herd living and age segregation in Mussaurus', 'https://doi.org/10.1038/s41598-021-99176-1'), P('Otero & Pol (2013), postcranial anatomy and ontogeny of Mussaurus', 'https://doi.org/10.1080/02724634.2013.769444'), N('mussaurus')
    ], ['The precise locomotor transition through growth remains model-dependent.', 'Social evidence represents particular assemblages, not every population.'], {
      score: 92, material: 'Eggs and multiple articulated skeletons spanning hatchling to adult growth stages.', formations: 'Laguna Colorada Formation, Santa Cruz, Argentina.', confidenceLimit: 'Juvenile proportions must not be used as the adult body plan.', uncertainties: ['exact adult gait', 'extent of social behaviour']
    }),

    nanshiungosaurus: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 72-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Maniraptora', 'Therizinosauria'],
      length: null,
      description: 'Nanshiungosaurus brevispinus was a derived therizinosaur from the Nanxiong Basin of southern China, based on a skull-less partial axial and pelvic skeleton.',
      facts: ['The type preserves vertebrae and pelvis but little basis for a precise whole-body reconstruction.', 'Nanshiungosaurus bohlini from Gansu is poorly comparable and should not automatically extend the type genus.', 'Plant-eating or omnivorous habits are inferred from therizinosaur anatomy; no direct gut contents are known.']
    }, 'The type species is tied to Maastrichtian deposits of the Nanxiong Basin; the old 84-71 Ma range is too broad.', [
      P('Zanno (2010), taxonomic and phylogenetic re-evaluation of Therizinosauria', 'https://doi.org/10.1080/14772019.2010.488045'), N('nanshiungosaurus')
    ], ['The type is incomplete and has not received a comprehensive modern redescription.', 'The second named species may not belong to Nanshiungosaurus.'], {
      score: 31, material: 'Partial vertebral column and pelvis without a skull.', formations: 'Nanxiong Basin red beds, Guangdong, China.', confidenceLimit: 'Skull, forelimb claws, body covering and precise size are not preserved in the type.', uncertainties: ['species referrals', 'diagnostic adequacy']
    }, 'needs-specialist-review'),

    nemegtosaurus: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 70-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria'],
      description: 'Nemegtosaurus mongoliensis is a titanosaur from the Nemegt Formation of Mongolia, named from a skull and lower jaw. Sparse postcranial remains have been proposed as referrals, but no complete Nemegtosaurus skeleton is known.',
      facts: ['The type is principally cranial and bears narrow-crowned replacement teeth.', 'It may represent the same animal as the skull-less titanosaur Opisthocoelicaudia, but non-overlapping type material prevents a secure synonymy.', 'A possible additional skull-associated specimen supports titanosaur affinity but does not settle the synonymy.']
    }, 'Both the type locality and rediscovered localities place the genus in the Maastrichtian Nemegt Formation.', [
      P('Currie et al. (2018), rediscovery of the Nemegtosaurus and Opisthocoelicaudia type localities', 'https://doi.org/10.1016/j.palaeo.2017.10.035'), P('Averianov & Lopatin (2019), possible new Nemegtosaurus specimen', 'https://www.app.pan.pl/article/item/app005962019.html'), N('nemegtosaurus')
    ], ['Whether Nemegtosaurus and Opisthocoelicaudia are synonyms remains unresolved.', 'Postcranial anatomy and adult size are weakly constrained.'], {
      score: 38, material: 'Holotype skull and mandible, with limited possible additional material.', formations: 'Nemegt Formation, Mongolia.', confidenceLimit: 'Do not attach the Opisthocoelicaudia skeleton to this skull as established fact.', uncertainties: ['possible synonymy', 'postcranial identity']
    }),

    neuquensaurus: R({
      period: 'Late Cretaceous', mya: 'Campanian-Maastrichtian, about 83-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria', 'Saltasauridae', 'Saltasaurinae'],
      description: 'Neuquensaurus australis was a small-bodied saltasaurine titanosaur from the Neuquen Basin of Argentina. It is represented by abundant, mostly disarticulated bones from multiple individuals, not by one complete skeleton.',
      facts: ['The available material documents much of the postcranial skeleton and includes osteoderms.', 'Historical species and referrals overlap with the complicated genus Saltasaurus and require specimen-level care.', 'Its relatively small adult dimensions are supported by mature bone histology, although exact mass estimates vary.']
    }, 'Secure material spans Upper Cretaceous units of the Neuquen Basin; a Maastrichtian-only range is too narrow.', [
      P('Otero (2010), appendicular skeleton of Neuquensaurus', 'https://doi.org/10.4202/app.2009.0099'), P('Zurriaguz & Powell (2015), morphological diversity of Neuquensaurus vertebrae', 'https://doi.org/10.1080/08912963.2015.1079630'), N('neuquensaurus')
    ], ['Association of older collections to species and individuals is imperfect.', 'Exact species boundaries within the historical material remain debated.'], {
      score: 73, material: 'Abundant disarticulated cranial-limited and postcranial remains from multiple individuals, plus osteoderms.', formations: 'Anacleto and related Upper Cretaceous units, Neuquen Basin, Argentina.', confidenceLimit: 'Composite reconstructions unite multiple individuals.', uncertainties: ['specimen association', 'historical synonymy']
    }),

    nipponosaurus: R({
      period: 'Late Cretaceous', mya: 'Santonian, about 86-84 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Hadrosauridae', 'Lambeosaurinae'],
      description: 'Nipponosaurus sachalinensis was a lambeosaurine hadrosaurid from southern Sakhalin, Russia, represented by one roughly 60%-complete immature skeleton.',
      facts: ['The holotype includes parts of the skull, vertebral column and limbs recovered in two excavations.', 'Histological and skeletal features show it was not fully grown.', 'Modern reanalysis supports its validity, but its exact position within Lambeosaurinae is sensitive to ontogeny.']
    }, 'The marine Yezo Group horizon is Santonian; the specimen was found on Sakhalin when southern Sakhalin was under Japanese administration.', [
      P('Suzuki, Weishampel & Minoura (2004), anatomy and systematics of Nipponosaurus', 'https://doc.rero.ch/record/15180/files/PAL_E2456.pdf'), P('Takasaki et al. (2018), phylogenetic reanalysis of Nipponosaurus', 'https://doi.org/10.1080/08912963.2017.1317766'), N('nipponosaurus')
    ], ['Only one immature individual is known.', 'Adult crest form and mature size are unknown.'], {
      score: 68, material: 'Single associated subadult skeleton, approximately 60% complete.', formations: 'Upper Yezo Group, southern Sakhalin, Russia.', confidenceLimit: 'Adult anatomy and population variation cannot be inferred confidently.', uncertainties: ['ontogenetic effects on diagnosis', 'adult crest']
    }),

    noasaurus: R({
      period: 'Late Cretaceous', mya: 'late Campanian-Maastrichtian, about 75-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Ceratosauria', 'Abelisauroidea', 'Noasauridae'],
      description: 'Noasaurus leali was a small noasaurid theropod from the Lecho Formation of Argentina, based on a fragmentary disarticulated skeleton including skull and limb elements.',
      facts: ['The prominent curved ungual was once reconstructed as a raptorial toe claw but is now identified as a hand claw.', 'The holotype is too incomplete for a precise total length or body mass.', 'Carnivory is supported by the teeth and theropod anatomy; specialised fish-catching remains a recent hypothesis, not consensus.']
    }, 'The Lecho Formation is latest Cretaceous; the genus is not established across the full 84-66 Ma interval.', [
      P('Carrano, Loewen & Sertich (2011), new noasaurid material and morphology', 'https://doi.org/10.5479/si.00810266.95.1'), P('Agnolin & Chiarelli (2010), position of noasaurid claws', 'https://doi.org/10.1007/s12542-009-0044-2'), N('noasaurus')
    ], ['Feeding specialisation is disputed.', 'Many aspects of the skeleton are unknown.'], {
      score: 39, material: 'Fragmentary skull, vertebral and limb elements from the holotype.', formations: 'Lecho Formation, Salta, Argentina.', confidenceLimit: 'The famous claw belongs to the hand, and whole-body reconstructions are highly inferential.', uncertainties: ['feeding ecology', 'precise body proportions']
    }),

    nodosaurus: R({
      period: 'Late Cretaceous', mya: 'Cenomanian, about 100-94 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Ankylosauria', 'Nodosauridae'],
      description: 'Nodosaurus textilis is an early named nodosaurid ankylosaur from the Frontier Formation of Wyoming, based on a partial postcranial skeleton with armour but no skull.',
      facts: ['The holotype preserves vertebrae, girdle and limb elements and dermal armour.', 'No skull or tail club is known; head shape and much of the armour arrangement are reconstructed from relatives.', 'It was a quadrupedal herbivore by nodosaurid anatomy, but precise size and feeding height are estimates.']
    }, 'The Frontier Formation type horizon is Cenomanian; an Early Cretaceous 110-100 Ma range is incorrect.', [
      P('Marsh (1889), original description of Nodosaurus textilis', 'https://www.biodiversitylibrary.org/page/16045349'), N('nodosaurus')
    ], ['The old type needs modern redescription.', 'Its exact position within Nodosauridae is unstable.'], {
      score: 36, material: 'Single partial postcranial skeleton with osteoderms; skull absent.', formations: 'Frontier Formation, Wyoming, USA.', confidenceLimit: 'Skull, tail tip and exact armour arrangement are unknown.', uncertainties: ['diagnostic revision needed', 'body size']
    }, 'needs-specialist-review'),

    nqwebasaurus: R({
      period: 'Early Cretaceous', mya: 'probably Berriasian-Valanginian, about 145-133 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Ornithomimosauria'],
      diet: null,
      description: 'Nqwebasaurus thwazi was a small early ornithomimosaur from the Kirkwood Formation of South Africa, known from one incomplete but associated skeleton.',
      facts: ['The holotype includes skull fragments, vertebrae, forelimb and hindlimb elements.', 'Further preparation revealed anatomy supporting placement near the base of Ornithomimosauria.', 'Small stones in the abdominal region may be gastroliths, but they do not by themselves demonstrate a particular diet.']
    }, 'The Kirkwood type horizon is Early Cretaceous; the former Mid Jurassic label and 159-132 Ma range are erroneous.', [
      P('Choiniere, Forster & de Klerk (2012), new information on Nqwebasaurus', 'https://doi.org/10.1016/j.jafrearsci.2012.05.005'), N('nqwebasaurus')
    ], ['Only one individual is known.', 'The age of parts of the Kirkwood succession remains imprecise.', 'Diet is uncertain.'], {
      score: 63, material: 'One associated partial skeleton with limited cranial and substantial limb material.', formations: 'Kirkwood Formation, Eastern Cape, South Africa.', confidenceLimit: 'Adult size and feeding ecology cannot be established from the single specimen.', uncertainties: ['formation age resolution', 'diet', 'ontogenetic stage']
    }),

    omeisaurus: R({
      period: 'Middle Jurassic', mya: 'Bajocian-Callovian, about 170-164 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Eusauropoda', 'Mamenchisauridae'],
      length: null,
      description: 'Omeisaurus is a genus of Chinese eusauropods centred on the Middle Jurassic Shaximiao succession. Several species and many skeletons have been assigned to it, but genus limits and species referrals require modern revision.',
      facts: ['Material attributed to different species collectively covers much of the skeleton, including skulls in some species.', 'The tail-club often shown in reconstructions is based on referred material whose species association is uncertain.', 'Long neck and quadrupedal herbivory are well supported broadly, but measurements must remain species-specific.']
    }, 'The reviewed range follows Middle Jurassic type and core species; later referrals are not used to extend the genus automatically.', [
      P('Tan et al. (2020), a new species of Omeisaurus from Yunyang and mamenchisaurid relationships', 'https://doi.org/10.1080/08912963.2020.1743286'), N('omeisaurus')
    ], ['The genus is probably oversplit or non-monophyletic.', 'Several historical specimens lack rigorous species-level reassessment.'], {
      score: 61, material: 'Multiple partial to substantial skeletons assigned to several species; some cranial material.', formations: 'Lower and Upper Shaximiao formations, Sichuan, China.', confidenceLimit: 'Do not present a composite of all named species as one complete animal.', uncertainties: ['species validity', 'tail-club referral', 'genus monophyly']
    }, 'needs-specialist-review'),

    panoplosaurus: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 76-75 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Ankylosauria', 'Nodosauridae', 'Panoplosaurini'],
      description: 'Panoplosaurus mirus was a nodosaurid ankylosaur from the Dinosaur Park Formation of Alberta. The holotype preserves a complete skull, partial postcranium and armour; additional specimens add postcranial information.',
      facts: ['CT redescription supports separation from the related Edmontonia.', 'It carried extensive osteoderms but no ankylosaurid-style tail club is known.', 'Quadrupedal herbivory is secure; exact armour layout and body mass remain reconstructed.']
    }, 'The Dinosaur Park Formation type and secure referrals are late Campanian.', [
      P('Livius et al. (2026), CT redescription of the Panoplosaurus holotype skull', 'https://doi.org/10.1080/02724634.2026.2636589'), N('panoplosaurus')
    ], ['Some cranial ornament varies among individuals for unknown reasons.', 'Not all historical panoplosaurin material is securely referable.'], {
      score: 76, material: 'Complete holotype skull with partial skeleton and armour; further referred skeletons.', formations: 'Dinosaur Park Formation, Alberta, Canada.', confidenceLimit: 'Armour arrangement is only partly preserved and body mass is estimated.', uncertainties: ['individual cranial variation', 'referral boundaries']
    }),

    patagosaurus: R({
      period: 'Early-Middle Jurassic', mya: 'Toarcian-Bajocian, about 179-170 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Eusauropoda'],
      description: 'Patagosaurus fariasi was a basal eusauropod from the Canon Asfalto Formation of Patagonia. Its holotype is a partial postcranial skeleton, while additional disarticulated material represents several individuals.',
      facts: ['Modern redescription confirmed diagnostic characters in the holotype.', 'The skull is poorly represented, so feeding details beyond broad sauropod herbivory are uncertain.', 'A reported juvenile assemblage and referred bones should not be merged into a single complete skeleton.']
    }, 'Modern geochronology places relevant Canon Asfalto strata near the Early-Middle Jurassic transition, older than the former 164-159 Ma label.', [
      P('Holwerda, Rauhut & Pol (2021), osteological revision of Patagosaurus', 'https://doi.org/10.5252/geodiversitas2021v43a16'), N('patagosaurus')
    ], ['Some referred material may represent other sauropods.', 'The exact age of individual collecting horizons is not uniform.'], {
      score: 69, material: 'Partial holotype postcranium plus disarticulated remains from multiple individuals.', formations: 'Canon Asfalto Formation, Chubut, Argentina.', confidenceLimit: 'Skull, neck and maximum size are incompletely known.', uncertainties: ['referral of non-type material', 'horizon-level age']
    }),

    pelorosaurus: R({
      period: 'Early Cretaceous', mya: 'Valanginian, about 139-133 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Neosauropoda', 'Macronaria'],
      length: null,
      taxonomicStatus: 'historically valid name with disputed diagnosis and content',
      description: 'Pelorosaurus conybeari is a historically important but taxonomically difficult English sauropod name based on Early Cretaceous Wealden material. Its type concept involves a humerus and historically associated caudal vertebrae; many species once placed in Pelorosaurus do not belong there.',
      facts: ['The name has been applied inconsistently since the nineteenth century.', 'Pelorosaurus becklesii was removed to the separate genus Haestasaurus in a modern revision.', 'A precise body plan or family-level placement for P. conybeari is not secure.']
    }, 'The type material is from the Hastings Group and is older than a single 125 Ma estimate.', [
      P('Upchurch, Mannion & Taylor (2015), revision of Pelorosaurus becklesii and British sauropod nomenclature', 'https://doi.org/10.1371/journal.pone.0125819'), N('pelorosaurus')
    ], ['The composition and diagnostic validity of P. conybeari remain disputed.', 'Historical referrals cannot be treated as one genus.'], {
      score: 18, material: 'Historically associated humerus and caudal material; numerous old referrals now excluded.', formations: 'Hastings Group, southern England.', confidenceLimit: 'No reliable whole-body size or detailed anatomy can be reconstructed from the name-bearing material alone.', uncertainties: ['type composition', 'diagnostic validity', 'macronarian placement']
    }, 'needs-specialist-review'),

    piatnitzkysaurus: R({
      period: 'Early-Middle Jurassic', mya: 'Toarcian-Bajocian, about 179-170 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Megalosauroidea', 'Piatnitzkysauridae'],
      description: 'Piatnitzkysaurus floresi was a medium-sized basal megalosauroid theropod from the Canon Asfalto Formation of Patagonia, represented by two incomplete skeletons and isolated material.',
      facts: ['The type preserves skull, vertebral, girdle and limb elements but is not close to complete.', 'Braincase anatomy supports tetanuran affinity.', 'Carnivory and bipedal locomotion are secure; exact body mass is model-dependent.']
    }, 'The Canon Asfalto occurrences are older than the former Late Jurassic label and lie near the Early-Middle Jurassic transition.', [
      P('Rauhut (2004), braincase structure of Piatnitzkysaurus', 'https://doi.org/10.1139/e04-053'), N('piatnitzkysaurus')
    ], ['Formation horizons span a substantial interval.', 'Piatnitzkysaurid relationships vary among theropod analyses.'], {
      score: 66, material: 'Two partial skeletons including cranial and postcranial elements, plus isolated referrals.', formations: 'Canon Asfalto Formation, Chubut, Argentina.', confidenceLimit: 'Published reconstructions combine individuals and missing regions.', uncertainties: ['exact horizon age', 'fine phylogenetic position']
    }),

    podokesaurus: R({
      period: 'Early Jurassic', mya: 'Hettangian-Sinemurian, about 201-193 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Neotheropoda', 'Coelophysoidea'],
      length: null,
      taxonomicStatus: 'dubious or indeterminate coelophysoid; possible Coelophysis synonym',
      acceptedName: false,
      description: 'Podokesaurus holyokensis is based on one incomplete, partly articulated small theropod skeleton from Massachusetts that was destroyed by fire in 1917. Study is limited to photographs, published drawings and casts.',
      facts: ['The original specimen came from the Portland Formation, not the Middle Jurassic.', 'Its anatomy is coelophysoid, but the lost material may not preserve a unique diagnosis.', 'Proposed synonymy with Coelophysis cannot be tested adequately without the original fossil.']
    }, 'Portland Formation evidence places the specimen in the Early Jurassic.', [
      P('Talbot (1911), original description of Podokesaurus holyokensis', 'https://www.biodiversitylibrary.org/page/8714367'), P('Tykoski & Rowe (2004), Ceratosauria and status of Podokesaurus', 'https://www.jsg.utexas.edu/rowe/files/047-Tykoski_Rowe-20041.pdf'), N('podokesaurus')
    ], ['The holotype is lost and its validity cannot be retested directly.'], {
      score: 12, material: 'One destroyed partial skeleton documented by photographs, drawings and casts.', formations: 'Portland Formation, Massachusetts, USA.', confidenceLimit: 'Fine anatomy, size and diagnostic status cannot be verified from the fossil.', uncertainties: ['validity', 'possible Coelophysis synonymy']
    }, 'needs-specialist-review'),

    prosaurolophus: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 76-74 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Hadrosauridae', 'Saurolophinae', 'Saurolophini'],
      description: 'Prosaurolophus maximus was a saurolophine hadrosaurid from the Dinosaur Park and Two Medicine formations, known from numerous articulated skulls and partial skeletons across a growth series.',
      facts: ['Ten articulated skulls document substantial individual and ontogenetic variation.', 'Prosaurolophus blackfeetensis is best treated as a junior synonym of P. maximus in the modern quantitative revision.', 'The small nasal crest is bony; any associated inflatable soft-tissue display structure remains speculative.']
    }, 'Secure P. maximus material spans the late Campanian Dinosaur Park and Two Medicine formations.', [
      P('McGarrity, Campione & Evans (2013), cranial anatomy and variation in Prosaurolophus', 'https://doi.org/10.1111/zoj.12009'), N('prosaurolophus')
    ], ['Soft-tissue structures associated with the crest are unknown.', 'Species-level range depends on accepting P. blackfeetensis synonymy.'], {
      score: 85, material: 'Numerous complete articulated skulls and multiple partial skeletons of different growth stages.', formations: 'Dinosaur Park Formation, Alberta; Two Medicine Formation, Montana.', confidenceLimit: 'Crest soft tissue, colour and exact social signalling cannot be recovered.', uncertainties: ['soft-tissue display', 'range under alternate taxonomy']
    }),

    quaesitosaurus: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 75-72 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria', 'Nemegtosauridae'],
      length: null,
      description: 'Quaesitosaurus orientalis is a titanosaur from the Baruungoyot Formation of Mongolia, based almost entirely on one incomplete skull.',
      facts: ['The type skull has the elongate muzzle and slender teeth associated with nemegtosaurid titanosaurs.', 'Postcranial anatomy, total length and armour are unknown for the type.', 'Its distinction from Nemegtosaurus has been questioned but cannot be resolved confidently from current material.']
    }, 'The type comes from the late Campanian Baruungoyot Formation; it should not be assigned the age of the younger Nemegt Formation.', [
      P('Kurzanov & Bannikov (1983), original description of Quaesitosaurus', 'https://palaeontologia.pan.pl/Archive/1983-25_1-2_89-113_14-15.pdf'), N('quaesitosaurus')
    ], ['Validity relative to Nemegtosaurus needs modern specimen-level reassessment.', 'Almost the entire body is unknown.'], {
      score: 21, material: 'Single incomplete skull and mandible.', formations: 'Baruungoyot Formation, Mongolia.', confidenceLimit: 'No defensible precise body size or postcranial reconstruction.', uncertainties: ['generic validity', 'postcranial anatomy', 'feeding range']
    }, 'needs-specialist-review'),

    rhoetosaurus: R({
      period: 'Middle Jurassic', mya: 'Bajocian-Bathonian, about 176-164 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Gravisauria'],
      description: 'Rhoetosaurus brownei was a basal sauropod from the Evergreen Formation of Queensland, known from a partial skeleton preserving many vertebrae, pelvis and much of one hind limb and foot but no skull.',
      facts: ['Preparation and redescription support its distinctiveness despite missing cranial material.', 'The nearly complete hind foot provides unusually direct evidence for early sauropod pedal anatomy.', 'Quadrupedal support is secure; diet is inferred as herbivorous from sauropod identity rather than teeth or gut contents.']
    }, 'Refined geological work supports a Middle Jurassic age but not a narrow point date.', [
      P('Nair & Salisbury (2012), new anatomical information on Rhoetosaurus', 'https://doi.org/10.1080/02724634.2012.622324'), P('Jannel et al. (2019), hind-foot posture in Rhoetosaurus', 'https://doi.org/10.1002/jmor.20989'), P('Todd et al. (2019), refined age and context of Rhoetosaurus', 'https://doi.org/10.1016/j.gr.2019.05.008'), N('rhoetosaurus')
    ], ['The skull and most of the neck and forelimb are unknown.', 'Its exact position among basal sauropods varies.'], {
      score: 71, material: 'Partial postcranial skeleton with about 40 vertebrae, pelvis and a well-preserved hind limb and foot.', formations: 'Evergreen Formation, Queensland, Australia.', confidenceLimit: 'Head, teeth, forelimb and precise body length are reconstructed.', uncertainties: ['phylogenetic position', 'cranial anatomy']
    }),

    pinacosaurus: R({
      period: 'Late Cretaceous', mya: 'Campanian, about 80-72 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Ankylosauria', 'Ankylosauridae'],
      description: 'Pinacosaurus grangeri was an ankylosaurid from Campanian deposits of Mongolia and northern China, represented by numerous skulls and skeletons, especially juvenile groups.',
      facts: ['Exceptional juvenile assemblages preserve multiple associated individuals rather than one mass-complete skeleton.', 'Skulls show characteristic accessory openings near the nostrils, whose soft-tissue function remains debated.', 'A tail club is supported by ankylosaurid anatomy and referred caudal material, but armour layouts vary with preservation and growth.']
    }, 'Secure occurrences are Campanian Djadokhta-equivalent deposits; the range is not extended using undiagnostic ankylosaur material.', [
      P('Maryańska (1977), ankylosaurids from Mongolia including Pinacosaurus', 'https://palaeontologia.pan.pl/Archive/1977-37_85-151_20-32.pdf'), P('Hill, Witmer & Norell (2003), a juvenile Pinacosaurus specimen, ontogeny and ankylosaur relationships', 'https://doi.org/10.1206/0003-0082(2003)395%3C0001:ANSOPG%3E2.0.CO;2'), N('pinacosaurus')
    ], ['The status of P. mephistocephalus and some referrals remains debated.', 'Nasal soft tissues are unknown.'], {
      score: 86, material: 'Numerous skulls and partial to articulated skeletons across juvenile and larger size classes.', formations: 'Djadokhta and Bayan Mandahu formations, Mongolia and China.', confidenceLimit: 'Many articulated groups are juveniles and do not establish adult proportions alone.', uncertainties: ['species boundaries', 'nasal-opening function', 'adult armour variation']
    }),

    magyarosaurus: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 71-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria'],
      description: 'Magyarosaurus dacus was a small-bodied titanosaur from the Hateg Basin of Romania. It is known from abundant disarticulated bones belonging to multiple individuals, not a single complete skeleton.',
      facts: ['Bone histology indicates that small individuals were mature, supporting island dwarfism rather than juvenility.', 'The skull is poorly known and full-body reconstructions are composites.', 'Other species historically assigned to Magyarosaurus are dubious or belong elsewhere.']
    }, 'The core material is Maastrichtian Densus-Ciula Formation; older broad referrals are excluded.', [
      P('Stein et al. (2010), small body size and island dwarfism in Magyarosaurus', 'https://doi.org/10.1073/pnas.1000781107'), N('magyarosaurus')
    ], ['Species-level assignment of many isolated bones is difficult.', 'Precise adult size and phylogenetic position vary by specimen sample.'], {
      score: 68, material: 'Numerous disarticulated postcranial bones from multiple individuals; little secure cranial material.', formations: 'Densus-Ciula Formation, Hateg Basin, Romania.', confidenceLimit: 'No single complete skeleton exists and reconstructions combine individuals.', uncertainties: ['referrals', 'species limits', 'cranial anatomy']
    }),

    malawisaurus: R({
      period: 'Early Cretaceous', mya: 'Aptian, about 121-113 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria', 'Lithostrotia'],
      description: 'Malawisaurus dixeyi was an early lithostrotian titanosaur from the Dinosaur Beds of Malawi. Multiple individuals provide cranial and postcranial material, but the skeleton is reconstructed as a composite.',
      facts: ['Cranial remains include braincase and jaw elements, unusual completeness for an early titanosaur.', 'Associated osteoderms have been reported, although their arrangement is unknown.', 'Its placement close to the base of Lithostrotia makes it important for titanosaur evolution.']
    }, 'The Dinosaur Beds are treated as Aptian; a point range narrower than formation dating is avoided.', [
      P('Jacobs et al. (1993), new titanosaur material from Malawi', 'https://www.palass.org/publications/palaeontology-journal/archive/36/3/article_pp523-534'), P('Gomani (2005), sauropod dinosaurs from the Early Cretaceous of Malawi', 'https://palaeo-electronica.org/2005_1/gomani27/main.htm'), N('malawisaurus')
    ], ['Bones derive from several individuals and quarry associations are incomplete.', 'Precise placement within early Lithostrotia varies.'], {
      score: 72, material: 'Composite cranial and postcranial remains from multiple individuals, with reported osteoderms.', formations: 'Dinosaur Beds, northern Malawi.', confidenceLimit: 'Completeness and body size cannot be assigned to one individual.', uncertainties: ['individual association', 'osteoderm arrangement']
    }),

    mapusaurus: R({
      period: 'Late Cretaceous', mya: 'Cenomanian-early Turonian, about 97-93 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Allosauroidea', 'Carcharodontosauridae', 'Giganotosaurini'],
      description: 'Mapusaurus roseae was a giant carcharodontosaurid from the Huincul Formation of Argentina, known from a monospecific bonebed containing disarticulated remains of at least seven individuals of different sizes.',
      facts: ['The bonebed collectively preserves much of the skeleton but no complete individual.', 'Its close relationship to Giganotosaurus is well supported.', 'The aggregation is evidence that multiple individuals died together; cooperative pack hunting is not demonstrated.']
    }, 'The Huincul Formation bonebed is Cenomanian-early Turonian, close to 96-94 Ma.', [
      P('Coria & Currie (2006), a new carcharodontosaurid from the Huincul Formation', 'https://sciencepress.mnhn.fr/sites/default/files/articles/pdf/g2006n1a4.pdf'), N('mapusaurus')
    ], ['The cause and behavioural meaning of the multi-individual accumulation are unresolved.', 'Maximum size relies on fragmentary large individuals.'], {
      score: 82, material: 'Disarticulated bonebed with cranial and postcranial material from at least seven individuals.', formations: 'Huincul Formation, Neuquen Basin, Argentina.', confidenceLimit: 'Composite completeness does not equal one complete skeleton; social hunting is speculative.', uncertainties: ['bonebed formation', 'maximum adult size']
    }),

    marshosaurus: R({
      period: 'Late Jurassic', mya: 'Kimmeridgian-Tithonian, about 157-150 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae'],
      length: null,
      description: 'Marshosaurus bicentesimus was a medium-sized theropod from the Morrison Formation, founded on a partial left ilium. Referred cranial and postcranial bones are fragmentary and not all are securely associated.',
      facts: ['The type is far less complete than many popular reconstructions imply.', 'It is a tetanuran, but placement as a megalosauroid, piatnitzkysaurid or other basal branch varies.', 'Carnivory and bipedality are secure at broad theropod level; precise size is uncertain.']
    }, 'The Morrison occurrences are Late Jurassic; the 154-142 Ma range extends too young into the Cretaceous.', [
      P('Carrano, Benson & Sampson (2012), phylogeny of Tetanurae and review of Marshosaurus', 'https://doi.org/10.1080/14772019.2011.630927'), N('marshosaurus')
    ], ['The holotype is limited and referrals need renewed comparison.', 'Fine phylogenetic placement is unstable.'], {
      score: 29, material: 'Holotype partial ilium plus fragmentary referred skull, vertebral and limb material.', formations: 'Morrison Formation, Utah and Colorado, USA.', confidenceLimit: 'Whole-body size and detailed skull form are composites.', uncertainties: ['referral security', 'phylogenetic position']
    }, 'needs-specialist-review'),

    massospondylus: R({
      period: 'Early Jurassic', mya: 'Hettangian-Pliensbachian, about 201-183 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Massospondylidae'],
      description: 'Massospondylus carinatus was a common Early Jurassic sauropodomorph of southern Africa, known from many partial and articulated skeletons, skulls, embryos and juvenile material.',
      facts: ['The original name-bearing material was destroyed; a well-preserved neotype anchors modern usage.', 'Embryos and nesting-site material document early growth, but direct prolonged parental care is not established.', 'Adults were predominantly bipedal in current biomechanical interpretations; young animals had different proportions.']
    }, 'Secure upper Elliot and Clarens material spans much of the Early Jurassic, not the former 208-204 Ma interval.', [
      P('Chapelle & Choiniere (2018), revised cranial description of Massospondylus', 'https://doi.org/10.7717/peerj.4224'), P('Reisz et al. (2005), embryonic dinosaur skeletons and Massospondylus growth', 'https://doi.org/10.1126/science.1114942'), N('massospondylus')
    ], ['Several named southern African species have complex synonymy.', 'Growth and gait estimates remain model-dependent.'], {
      score: 94, material: 'Large sample of skulls and skeletons, including embryos, juveniles and adults.', formations: 'Upper Elliot and Clarens formations, South Africa and Lesotho.', confidenceLimit: 'Behaviour beyond nesting and broad locomotion should not be inferred from abundance alone.', uncertainties: ['species-level taxonomy', 'parental behaviour']
    }),

    metriacanthosaurus: R({
      period: 'Late Jurassic', mya: 'Oxfordian, about 163-157 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Allosauroidea', 'Metriacanthosauridae'],
      description: 'Metriacanthosaurus parkeri was a medium-large theropod from the Oxford Clay Formation of England, known from one incomplete postcranial skeleton without a skull.',
      facts: ['The holotype includes vertebrae, pelvic and hindlimb elements.', 'Its tall neural spines inspired the name but do not establish a skin sail.', 'Placement in Metriacanthosauridae is supported in major tetanuran analyses, while anatomy and exact size remain poorly constrained.']
    }, 'The Oxford Clay type horizon is Oxfordian; the age is not extended outside that unit.', [
      P('Carrano, Benson & Sampson (2012), tetanuran systematics including Metriacanthosaurus', 'https://doi.org/10.1080/14772019.2011.630927'), N('metriacanthosaurus')
    ], ['No skull is securely known.', 'Only one incomplete individual supports the genus.'], {
      score: 38, material: 'Single partial postcranial skeleton with axial, pelvic and hindlimb bones.', formations: 'Oxford Clay Formation, England.', confidenceLimit: 'Head, forelimbs, body covering and precise length are reconstructed.', uncertainties: ['size', 'soft-tissue profile', 'fine relationships']
    }),

    microceratus: R({
      period: 'Late Cretaceous', mya: 'probably Campanian, about 84-72 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ceratopsia', 'Neoceratopsia'],
      length: null,
      taxonomicStatus: 'replacement name for fragmentary Microceratops gobiensis; validity uncertain',
      description: 'Microceratus gobiensis is the replacement name for the preoccupied Microceratops gobiensis. Its Mongolian type material is fragmentary and historically mixed with fossils later named Graciliceratops.',
      facts: ['The name change solved a nomenclatural homonym but did not improve the fossil diagnosis.', 'Common skeletal reconstructions often incorporate material no longer referred to Microceratus.', 'A small bipedal neoceratopsian identity is plausible, but detailed anatomy and precise size are weakly supported.']
    }, 'Only a broad Campanian age can be defended for the relevant Gobi material; the former 86-66 Ma range is excessive.', [
      P('Mateus (2008), Microceratus as a replacement name for Microceratops', 'https://doi.org/10.1666/07-069.1'), N('microceratus')
    ], ['The type needs comprehensive modern redescription.', 'Diagnostic validity and assignment of referred material remain uncertain.'], {
      score: 12, material: 'Fragmentary type material; much historically referred material belongs to other taxa.', formations: 'Gobi Desert Upper Cretaceous deposits, Mongolia.', confidenceLimit: 'Most full-body anatomy, size and feeding detail are reconstructed from relatives.', uncertainties: ['validity', 'type composition', 'locality precision']
    }, 'needs-specialist-review'),

    mononykus: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 70-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Alvarezsauria', 'Alvarezsauridae', 'Parvicursorinae'],
      description: 'Mononykus olecranus was a small alvarezsaurid from the Nemegt Formation of Mongolia, known from an incomplete skeleton lacking a skull.',
      facts: ['Its very short, powerful forelimb bears one dominant functional digit.', 'The specialised arm is directly preserved, but proposed use in opening insect nests remains a functional hypothesis.', 'The skull, diet and external covering are inferred mainly from other alvarezsaurs.']
    }, 'The holotype is from the Maastrichtian Nemegt Formation; older intervals should not be added from relatives.', [
      P('Altangerel Perle et al. (1993), Flightless bird from Cretaceous of Mongolia', 'https://doi.org/10.1038/362623a0'), N('mononykus')
    ], ['No skull is known for the holotype.', 'Forelimb function and diet are not directly demonstrated.'], {
      score: 55, material: 'One incomplete postcranial skeleton with diagnostic forelimbs and hindlimb material.', formations: 'Nemegt Formation, Mongolia.', confidenceLimit: 'Head, teeth, diet and exact adult size remain uncertain.', uncertainties: ['forelimb function', 'diet', 'cranial anatomy']
    }),

    nomingia: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 70-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Oviraptorosauria', 'Caenagnathidae', 'Elmisaurus'],
      diet: null,
      taxonomicStatus: 'probable junior synonym of Elmisaurus rarus',
      acceptedName: false,
      description: 'Nomingia gobiensis was named for a partial oviraptorosaur skeleton from the Nemegt Formation, notable for fused terminal tail vertebrae. A 2021 revision found it most likely to be the same taxon as Elmisaurus rarus.',
      facts: ['The holotype lacks a skull but preserves vertebral, pelvic and limb material.', 'Its short fused tail tip is real, though calling it identical to a modern bird pygostyle can overstate convergence.', 'This page should be retained as a historical synonym rather than counted as a separate accepted genus.']
    }, 'The specimen is from the Maastrichtian Nemegt Formation, not merely a generic 72-68 Ma range.', [
      P('Barsbold et al. (2000), original description of Nomingia', 'https://www.app.pan.pl/article/item/app45-097.html'), P('Funston et al. (2021), partial oviraptorosaur and synonymy of Nomingia with Elmisaurus', 'https://doi.org/10.1371/journal.pone.0254564'), N('nomingia')
    ], ['The synonymy is well argued but could be retested with additional overlapping material.', 'Tail soft tissues are unknown.'], {
      score: 57, material: 'Single partial postcranial skeleton including a fused terminal tail structure.', formations: 'Nemegt Formation, Mongolia.', confidenceLimit: 'No skull or direct diet evidence; do not count Nomingia separately from Elmisaurus under the reviewed taxonomy.', uncertainties: ['synonymy subject to future finds', 'tail soft tissue']
    }),

    opisthocoelicaudia: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 70-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria'],
      description: 'Opisthocoelicaudia skarzynskii was a titanosaur from the Nemegt Formation of Mongolia, represented by one well-preserved, largely articulated postcranial skeleton lacking the neck and skull.',
      facts: ['The holotype preserves most of the trunk, limbs, pelvis and tail.', 'The missing head and neck prevent direct comparison with the skull-only Nemegtosaurus.', 'Proposed rearing or tripod posture is biomechanically debated and should not be presented as observed behaviour.']
    }, 'The rediscovered type locality confirms a Maastrichtian Nemegt Formation origin.', [
      P('Borsuk-Bialynicka (1977), original monograph on Opisthocoelicaudia', 'https://palaeontologia.pan.pl/Archive/1977-37_5-64_1-19.pdf'), P('Currie et al. (2018), rediscovery of the type locality', 'https://doi.org/10.1016/j.palaeo.2017.10.035'), N('opisthocoelicaudia')
    ], ['Possible synonymy with Nemegtosaurus cannot be tested using overlapping type anatomy.', 'The skull and neck remain unknown.'], {
      score: 83, material: 'One largely articulated postcranial skeleton lacking skull and neck.', formations: 'Nemegt Formation, Mongolia.', confidenceLimit: 'Head form and feeding anatomy should not be copied from Nemegtosaurus as fact.', uncertainties: ['Nemegtosaurus synonymy', 'rearing biomechanics']
    }),

    orodromeus: R({
      period: 'Late Cretaceous', mya: 'Campanian, about 76-74 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Thescelosauridae'],
      description: 'Orodromeus makelai was a small thescelosaurid ornithopod from the Two Medicine Formation of Montana, known from skulls and partial skeletons of several growth stages.',
      facts: ['The type and referred material establish a small bipedal herbivorous ornithopod.', 'Eggs and nests once assigned to Orodromeus are now attributed chiefly to the troodontid Troodon/Stenonychosaurus complex.', 'Burrowing is plausible for close relatives but is not directly demonstrated for Orodromeus by an in-burrow skeleton.']
    }, 'Two Medicine occurrences are late Campanian, approximately 76-74 Ma.', [
      P('Horner et al. (2009), comparative long-bone histology and growth of Orodromeus', 'https://doi.org/10.1671/039.029.0312'), P('Horner & Weishampel (1996), correction removing the famous embryos from Orodromeus', 'https://doi.org/10.1038/383103b0'), N('orodromeus')
    ], ['Some juvenile and nesting associations were historically misidentified.', 'Its exact position within Thescelosauridae varies.'], {
      score: 62, material: 'Several partial skeletons and skulls, including juvenile material.', formations: 'Two Medicine Formation, Montana, USA.', confidenceLimit: 'Do not cite the famous Egg Mountain eggs as Orodromeus eggs under current identifications.', uncertainties: ['nest attribution history', 'burrowing behaviour']
    }),

    oryctodromeus: R({
      period: 'Late Cretaceous', mya: 'Cenomanian, about 100-94 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Thescelosauridae'],
      description: 'Oryctodromeus cubicularis was a small ornithopod from the Blackleaf and Wayan formations of Montana and Idaho. An adult and juveniles preserved within a burrow provide direct evidence of den use.',
      facts: ['The original burrow contained an adult-sized individual and two juveniles.', 'Skeletal features are consistent with digging, but it was not as specialised as modern obligate burrowers.', 'Herbivory or omnivory is inferred from thescelosaurid anatomy; direct diet evidence is absent.']
    }, 'The relevant formations are Cenomanian; the type locality is not simply a 99-94 Ma point.', [
      P('Varricchio, Martin & Katsura (2007), first body-and-trace evidence for a burrowing dinosaur', 'https://doi.org/10.1098/rspb.2006.0443'), N('oryctodromeus')
    ], ['Whether the preserved group represents parental care is uncertain.', 'The extent of habitual burrowing across the species is unknown.'], {
      score: 78, material: 'Partial adult and juvenile skeletons associated inside a fossil burrow; further referred material.', formations: 'Blackleaf Formation, Montana, and Wayan Formation, Idaho, USA.', confidenceLimit: 'Burrow use is secure, but parental care and frequency of the behaviour are not.', uncertainties: ['social interpretation', 'diet']
    }),

    othnielia: R({
      period: 'Late Jurassic', mya: 'Kimmeridgian-Tithonian, about 157-150 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Neornithischia'],
      length: null,
      taxonomicStatus: 'nomen dubium based on a nondiagnostic isolated femur',
      acceptedName: false,
      description: 'Othnielia rex is a historical Morrison Formation name founded on a nondiagnostic isolated femur. It is a nomen dubium, and the type cannot be linked securely to the more complete small-bodied Morrison ornithischian skeletons once referred to Othnielia.',
      facts: ['The holotype alone does not establish a complete body plan, precise size or a distinct valid genus.', 'Carpenter and Galton (2018) proposed combining Othnielia and several other names within Nanosaurus.', 'Barrett and Maidment (2025) found that the proposed Nanosaurus synonymy was unsupported because the inadequate type specimens cannot be compared diagnostically.']
    }, 'The historical material is Late Jurassic Morrison Formation; the former range extended too young.', [
      P('Carpenter & Galton (2018), photo-documentation and proposed synonymy of Morrison small ornithischians', 'https://doi.org/10.31711/giw.v5.pp167-207'), P('Barrett & Maidment (2025), A Review of Nanosaurus agilis Marsh and Other Small-Bodied Morrison Formation “Ornithopods”', 'https://doi.org/10.3374/014.066.0102'), N('othnielia')
    ], ['The exact neornithischian affinity of the isolated type femur cannot be resolved.'], {
      score: 5, material: 'Nondiagnostic isolated femur; historically referred skeletons cannot be attached securely to the name.', formations: 'Morrison Formation, western USA.', confidenceLimit: 'Length is cleared, and no diet detail or full anatomy should be attributed to Othnielia from its type alone.', uncertainties: ['phylogenetic identity', 'historical referrals']
    }, 'needs-specialist-review'),

    pantydraco: R({
      period: 'Late Triassic', mya: 'Rhaetian, about 205.7-201.4 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha'],
      length: null,
      taxonomicStatus: 'possibly valid, but may represent juvenile Thecodontosaurus',
      description: 'Pantydraco caducus is a small basal sauropodomorph from fissure deposits at Pant-y-ffynnon, Wales, based mainly on an immature partial skeleton formerly assigned to Thecodontosaurus.',
      facts: ['The material includes partial skull and postcranium but represents a young individual.', 'The genus was erected for differences from Thecodontosaurus antiquus.', 'Recent comparison has questioned whether those differences exceed juvenile variation, so validity remains open.']
    }, 'The Pant-y-ffynnon fissure fauna is Rhaetian and latest Triassic; 205.7-201.4 Ma gives the current stage bounds rather than a tightly dated fossil horizon.', [
      P('Galton, Yates & Kermack (2007), naming of Pantydraco', 'https://doi.org/10.1127/0077-7749/2007/0243-0119'), P('Ballell, Rayfield & Benton (2020), redescription of Thecodontosaurus and implications for Pantydraco', 'https://doi.org/10.1080/02724634.2020.1770774'), N('pantydraco')
    ], ['Its distinction from juvenile Thecodontosaurus is unresolved.', 'Adult anatomy and size are unknown.'], {
      score: 31, material: 'Immature partial skeleton with cranial and postcranial elements, plus referred fragments.', formations: 'Pant-y-ffynnon fissure deposits, South Wales, UK.', confidenceLimit: 'Do not scale juvenile anatomy confidently to an adult.', uncertainties: ['generic validity', 'ontogenetic effects']
    }, 'needs-specialist-review'),

    paralititan: R({
      period: 'Late Cretaceous', mya: 'Cenomanian, about 100-94 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria'],
      description: 'Paralititan stromeri was a giant titanosaur from the Bahariya Formation of Egypt, based on an incomplete, partly associated skeleton dominated by girdle and limb material.',
      facts: ['The holotype includes very large humeri plus vertebral and girdle elements, not a complete skeleton.', 'Gigantic size is secure qualitatively, but precise length and mass estimates span a wide range.', 'The fossils came from coastal mangrove-influenced sediments; this does not make the animal aquatic.']
    }, 'The Bahariya type horizon is Cenomanian, approximately 100-94 Ma.', [
      P('Smith et al. (2001), a giant sauropod from an Upper Cretaceous mangrove deposit', 'https://doi.org/10.1126/science.1060561'), N('paralititan')
    ], ['Much of the axial skeleton and skull is unknown.', 'Maximum mass is highly sensitive to scaling assumptions.'], {
      score: 44, material: 'Incomplete partial skeleton including large paired humeri, vertebrae and girdle elements.', formations: 'Bahariya Formation, Egypt.', confidenceLimit: 'Precise giant-size estimates and full proportions are extrapolations.', uncertainties: ['mass', 'phylogenetic position', 'missing skull']
    }),

    parksosaurus: R({
      period: 'Late Cretaceous', mya: 'early Maastrichtian, about 72-69 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Thescelosauridae', 'Thescelosaurinae'],
      description: 'Parksosaurus warrenae was a small thescelosaurid from the Horseshoe Canyon Formation of Alberta, known chiefly from one partial skeleton with an incomplete skull.',
      facts: ['The holotype preserves much of the postcranium and parts of the skull but is not complete.', 'It was a bipedal, low-browsing ornithopod; more specific diet claims are not directly evidenced.', 'Its close relationship to Thescelosaurus is supported, while fine thescelosaurid branching varies.']
    }, 'The relevant Horseshoe Canyon strata are early Maastrichtian, younger than the former 76-74 Ma range.', [
      P('Sues et al. (2023), anatomy of the holotype and only known skeleton of Parksosaurus', 'https://doi.org/10.1016/j.cretres.2022.105369'), N('parksosaurus')
    ], ['The skull is incomplete and only one principal skeleton is known.', 'Published size estimates are approximate.'], {
      score: 57, material: 'One partial skeleton with incomplete skull and substantial postcranium.', formations: 'Horseshoe Canyon Formation, Alberta, Canada.', confidenceLimit: 'Population variation, soft tissue and precise size are unknown.', uncertainties: ['cranial reconstruction', 'fine phylogeny']
    }),

    patagotitan: R({
      period: 'Early Cretaceous', mya: 'latest Albian, about 102-101 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria', 'Lognkosauria'],
      massKg: null,
      description: 'Patagotitan mayorum was a giant titanosaur from the Cerro Barcino Formation of Patagonia, represented by partial skeletons from at least six individuals accumulated at one locality.',
      facts: ['The combined sample preserves much of the postcranial skeleton, but no single individual is complete and the skull is unknown.', 'It was among the largest well-sampled terrestrial vertebrates.', 'Published mass estimates vary substantially with scaling method and should be presented as ranges, not one exact value.']
    }, 'Radiometric dating near 101.6 Ma places the quarry in the latest Albian, shortly before the Early-Late Cretaceous boundary.', [
      P('Carballido et al. (2017), a new giant titanosaur and body-mass evolution', 'https://doi.org/10.1098/rspb.2017.1219'), N('patagotitan')
    ], ['Skull and much of the neck are unknown.', 'Mass and total length estimates remain method-sensitive.'], {
      score: 86, material: 'Partial postcranial skeletons from at least six individuals, collectively preserving most body regions except the skull.', formations: 'Cerro Barcino Formation, Chubut, Argentina.', confidenceLimit: 'Composite completeness and giant size must not be assigned to one complete individual.', uncertainties: ['mass estimate', 'neck and skull anatomy']
    }),

    pelecanimimus: R({
      period: 'Early Cretaceous', mya: 'late Barremian, about 126-125 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Ornithomimosauria'],
      description: 'Pelecanimimus polyodon was a basal ornithomimosaur from the Las Hoyas Konservat-Lagerstatte of Spain, represented by one articulated front half of a skeleton with exceptional soft-tissue preservation.',
      facts: ['The specimen preserves skull, neck, forelimbs and anterior trunk but lacks most of the hind body.', 'It had more than 200 small teeth, unlike later toothless ornithomimids.', 'Soft tissues around the throat and body outline are preserved, but a pelican-like pouch is not established.']
    }, 'Las Hoyas is late Barremian, around 126-125 Ma.', [
      P('Perez-Moreno et al. (1994), a unique multitoothed ornithomimosaur from Las Hoyas', 'https://doi.org/10.1038/370363a0'), N('pelecanimimus')
    ], ['Only one incomplete individual is known.', 'Diet and the function of throat soft tissues remain uncertain.'], {
      score: 73, material: 'Single articulated anterior skeleton with skull, forelimbs and soft-tissue traces; hindquarters largely absent.', formations: 'La Huerguina Formation, Las Hoyas, Spain.', confidenceLimit: 'Full length, hindlimb proportions and feeding ecology require inference.', uncertainties: ['diet', 'throat soft-tissue function']
    }),

    poekilopleuron: R({
      period: 'Middle Jurassic', mya: 'Bathonian, about 168-166 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Megalosauroidea'],
      length: null,
      taxonomicStatus: 'historically valid but difficult to diagnose because the holotype was destroyed',
      description: 'Poekilopleuron bucklandii was a large theropod from the Calcaire de Caen of Normandy. Its partial skeleton was destroyed during the Second World War; casts, illustrations and a few separated elements preserve the evidence.',
      facts: ['The holotype included vertebrae, ribs, forelimbs and hindlimb parts but no complete skull.', 'Its megalosauroid affinity is likely, but exact placement and even continued diagnosability are debated.', 'Many later species once assigned to Poekilopleuron have been removed.']
    }, 'The Calcaire de Caen type unit is Bathonian, approximately 168-166 million years old.', [
      P('Allain & Chure (2002), revision of Poekilopleuron and megalosaur anatomy', 'https://doi.org/10.1111/1475-4983.00277'), N('poekilopleuron')
    ], ['The original type is destroyed, limiting modern character testing.', 'Some surviving material and casts require a modern comprehensive audit.'], {
      score: 24, material: 'Destroyed partial skeleton documented by old descriptions, illustrations, casts and limited surviving pieces.', formations: 'Calcaire de Caen, Normandy, France.', confidenceLimit: 'Skull form, exact size and many details cannot be verified on the original.', uncertainties: ['diagnostic validity', 'phylogenetic position']
    }, 'needs-specialist-review'),

    prenocephale: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 75-72 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Pachycephalosauria', 'Pachycephalosauridae'],
      description: 'Prenocephale prenes was a dome-headed pachycephalosaurid from the Baruungoyot Formation of Mongolia, known from a skull with partial postcranium and additional cranial material.',
      facts: ['The rounded frontoparietal dome and surrounding nodes are directly preserved.', 'Homalocephale has been proposed as a juvenile growth stage, but this synonymy is not universally accepted.', 'Bipedality is secure; herbivory or omnivory and head-striking behaviour remain inferential.']
    }, 'The type is late Campanian Baruungoyot Formation; a range to 66 Ma is not supported by the type species.', [
      P('Sullivan (2003), Revision of the dinosaur Stegoceras Lambe (Ornithischia, Pachycephalosauridae)', 'https://www.tandfonline.com/doi/abs/10.1671/0272-4634%282003%2923%5B181%3AROTDSL%5D2.0.CO%3B2'), N('prenocephale')
    ], ['Ontogenetic synonymy with Homalocephale remains debated.', 'Diet and dome function are unresolved.'], {
      score: 61, material: 'Holotype skull and partial skeleton plus referred skull material.', formations: 'Baruungoyot Formation, Mongolia.', confidenceLimit: 'Do not state head-butting or a specific diet as observed fact.', uncertainties: ['Homalocephale synonymy', 'dome function', 'diet']
    }),

    probactrosaurus: R({
      period: 'Early Cretaceous', mya: 'Aptian-Albian, about 125-100 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Hadrosauroidea'],
      description: 'Probactrosaurus gobiensis was a non-hadrosaurid hadrosauroid from the Dashuigou Formation of Inner Mongolia, known from multiple partial skeletons including skull and jaws.',
      facts: ['It documents an intermediate-grade hadrosauroid, but it is not established as the direct ancestor of later hadrosaurids.', 'Probactrosaurus alashanicus is generally treated as a junior synonym, while P. mazongshanensis was removed to Gongpoquansaurus.', 'Quadrupedal and bipedal movement were anatomically possible; exact gait frequency is unknown.']
    }, 'The Dashuigou Formation is Aptian-Albian; the broad original catalogue interval is retained only at formation resolution.', [
      P('Norman (2002), systematic review of Probactrosaurus', 'https://doi.org/10.1046/j.1096-3642.2002.00027.x'), N('probactrosaurus')
    ], ['Species-level historical referrals remain complex.', 'Formation dating is not a narrow numerical point.'], {
      score: 78, material: 'Several partial skeletons with substantial cranial, axial and appendicular material.', formations: 'Dashuigou Formation, Inner Mongolia, China.', confidenceLimit: 'Evolutionary grade does not mean direct ancestry.', uncertainties: ['species synonymy', 'locomotor emphasis']
    }),

    proceratosaurus: R({
      period: 'Middle Jurassic', mya: 'Bathonian, about 168-166 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Tyrannosauroidea', 'Proceratosauridae'],
      length: null,
      description: 'Proceratosaurus bradleyi was a small early tyrannosauroid from the White Limestone Formation of England, known from one incomplete but well-preserved skull.',
      facts: ['CT and redescription identified it as a proceratosaurid tyrannosauroid, not a close relative of Ceratosaurus.', 'A low crest rises from the nasal region, but its complete shape and function are unknown.', 'No secure postcranial skeleton exists, so body size and proportions are inferred from relatives.']
    }, 'The type horizon is Bathonian Middle Jurassic.', [
      P('Rauhut, Milner & Moore-Fay (2010), cranial osteology and tyrannosauroid affinities of Proceratosaurus', 'https://doi.org/10.1111/j.1096-3642.2009.00591.x'), N('proceratosaurus')
    ], ['Only one partial skull is known.', 'Body size, forelimbs and covering are not directly known.'], {
      score: 42, material: 'Single partial skull and mandible; no secure associated postcranium.', formations: 'White Limestone Formation, Gloucestershire, England.', confidenceLimit: 'Whole-body reconstructions and precise length are comparative estimates.', uncertainties: ['crest completion', 'postcranial anatomy']
    }),

    procompsognathus: R({
      period: 'Late Triassic', mya: 'Norian, about 215-208 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Neotheropoda incertae sedis'],
      length: null,
      taxonomicStatus: 'validity and skeletal composition disputed',
      description: 'Procompsognathus triassicus is based on a small, incomplete skeleton from the Lowenstein Formation of Germany. The specimen is poorly preserved, and parts of the skull may belong to a non-dinosaurian archosaur.',
      facts: ['The postcranium is broadly consistent with a small neotheropod or coelophysoid.', 'Cranial material was historically overinterpreted and may be chimaeric.', 'Precise diet, size and relationships cannot be established confidently.']
    }, 'The type is Norian Late Triassic; the 221-210 Ma range is broader than its horizon supports.', [
      P('Sereno & Wild (1992), reassessment of the composite Procompsognathus material', 'https://doi.org/10.1080/02724634.1992.10011473'), N('procompsognathus')
    ], ['The skull association and diagnostic validity need further revision.', 'Fine theropod placement is unresolved.'], {
      score: 15, material: 'Poorly preserved incomplete skeleton with possibly misassociated cranial pieces.', formations: 'Lowenstein Formation, Baden-Wurttemberg, Germany.', confidenceLimit: 'Do not reconstruct the skull or claim a precise coelophysoid position as certain.', uncertainties: ['chimaeric composition', 'validity', 'phylogeny']
    }, 'needs-specialist-review'),

    protarchaeopteryx: R({
      period: 'Early Cretaceous', mya: 'Aptian, about 125-120 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Oviraptorosauria'],
      description: 'Protarchaeopteryx robusta was an early oviraptorosaur from the Yixian Formation of Liaoning, represented by feathered partial skeletons.',
      facts: ['Long symmetrical feathers occur on the arms and especially the tail.', 'Its feathers do not demonstrate powered flight; skeletal anatomy places it among non-avian oviraptorosaurs.', 'Teeth and jaw form do not establish a single precise diet; omnivory or herbivory remains inferred.']
    }, 'The Yixian Formation specimens are Aptian Early Cretaceous.', [
      P('Ji & Ji (1997), original report of Protarchaeopteryx and Caudipteryx', 'https://www.biodiversitylibrary.org/part/48723'), N('protarchaeopteryx')
    ], ['The number and association of referred specimens warrant continued review.', 'Feather colour and exact locomotor role are unknown.'], {
      score: 67, material: 'Partial articulated skeletons with direct feather impressions.', formations: 'Yixian Formation, Liaoning, China.', confidenceLimit: 'Feathers are secure; flight and precise diet are not.', uncertainties: ['diet', 'feather function', 'specimen referrals']
    }),

    protohadros: R({
      period: 'Late Cretaceous', mya: 'Cenomanian, about 96-94 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Hadrosauroidea'],
      length: null,
      description: 'Protohadros byrdi was a non-hadrosaurid hadrosauroid from the Woodbine Formation of Texas, known from a partial skull with limited postcranial material.',
      facts: ['Its name does not mean it was the direct ancestor of Hadrosauridae.', 'The downturned jaw and dental battery support herbivory, but a specialised grazing ecology is not demonstrated.', 'Most of the body and exact adult size are reconstructed from related hadrosauroids.']
    }, 'The Woodbine Formation type horizon is Cenomanian, approximately 96-94 Ma.', [
      P('Head (1998), a new hadrosaurid-grade dinosaur from the Cenomanian of Texas', 'https://doi.org/10.1080/02724634.1998.10011101'), N('protohadros')
    ], ['Postcranial anatomy is very limited.', 'Its exact position among non-hadrosaurid hadrosauroids varies.'], {
      score: 39, material: 'Partial skull and jaw with sparse referred postcranial remains.', formations: 'Woodbine Formation, Texas, USA.', confidenceLimit: 'Full-body size, gait proportions and direct ancestry are not established.', uncertainties: ['phylogenetic position', 'postcranial anatomy']
    }),

    puertasaurus: R({
      period: 'Late Cretaceous', mya: 'Campanian-Maastrichtian, about 76-70 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Titanosauria', 'Lognkosauria'],
      length: null,
      description: 'Puertasaurus reuili was a giant titanosaur from southern Patagonia, based on only four vertebrae: one cervical, one dorsal and two caudals.',
      facts: ['The enormous dorsal vertebra demonstrates a very broad trunk region.', 'No skull or limb bones are known from the holotype.', 'Exact length and mass estimates are highly speculative because scaling four vertebrae requires uncertain proportions.']
    }, 'The Cerro Fortaleza/Pari Aike unit has a broad Campanian-Maastrichtian age; the type cannot support a precise point date.', [
      P('Novas et al. (2005), Puertasaurus, a giant Late Cretaceous sauropod', 'https://revista.macn.gob.ar/ojs/index.php/RevMus/article/view/74'), N('puertasaurus')
    ], ['Formation nomenclature and age remain debated.', 'Nearly the entire skeleton and all precise size metrics are unknown.'], {
      score: 14, material: 'Four vertebrae only: cervical, dorsal and two caudals.', formations: 'Cerro Fortaleza or Pari Aike Formation, Santa Cruz, Argentina.', confidenceLimit: 'Do not present a precise mass, length or complete skeleton.', uncertainties: ['formation age', 'size extrapolation', 'phylogenetic placement']
    }),

    rebbachisaurus: R({
      period: 'Late Cretaceous', mya: 'Cenomanian, about 100-94 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Diplodocoidea', 'Rebbachisauridae'],
      description: 'Rebbachisaurus garasbae was a rebbachisaurid sauropod from the Kem Kem Group of Morocco, known from a prepared partial skeleton including vertebrae, scapula, humerus and ischium.',
      facts: ['The giant neural spine belongs to a dorsal vertebra but does not by itself establish a tall skin sail.', 'Rebbachisaurus tessonei was removed to the genus Limaysaurus.', 'The skull and most of the neck and limbs are unknown; body mass estimates are moderate for a sauropod, not reliably gigantic.']
    }, 'The type is lower Upper Cretaceous Cenomanian, not Early Cretaceous.', [
      P('Wilson & Allain (2015), osteology of Rebbachisaurus garasbae', 'https://doi.org/10.1080/02724634.2014.1000701'), N('rebbachisaurus')
    ], ['Some Kem Kem sauropod material cannot be referred securely.', 'Soft-tissue profile over the neural spines is unknown.'], {
      score: 57, material: 'Partial skeleton with articulated and disarticulated vertebrae plus scapula, humerus and ischium.', formations: 'Kem Kem Group, southeastern Morocco.', confidenceLimit: 'No skull, complete neck or complete limbs; a sail is not demonstrated.', uncertainties: ['soft tissue over neural spines', 'isolated referrals']
    }),

    rhabdodon: R({
      period: 'Late Cretaceous', mya: 'Campanian-Maastrichtian, about 84-69 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Rhabdodontomorpha', 'Rhabdodontidae'],
      description: 'Rhabdodon priscus was a robust rhabdodontid ornithopod from southern France. Its lectotype is a dentary; broader anatomy comes from numerous disarticulated specimens whose species assignments require locality-level care.',
      facts: ['A 2025 reassessment diagnosed R. priscus using the type material rather than the old continent-wide wastebasket.', 'Romanian and Austrian material once called Rhabdodon belongs to Zalmoxes and Mochlodon.', 'R. septimanicus may be distinct, so French material should not all be merged automatically.']
    }, 'The genus spans Campanian to lower Maastrichtian French units, not a narrow 76-70 Ma interval.', [
      P('Czepiński & Madzia (2025), Exploring the diversity and disparity of rhabdodontomorph ornithopods from the Late Cretaceous European archipelago', 'https://doi.org/10.1038/s41598-025-98083-z'), N('rhabdodon')
    ], ['Species boundaries within French material remain under revision.', 'Many postcranial referrals are not associated with diagnostic jaws.'], {
      score: 59, material: 'Lectotype dentary plus abundant disarticulated cranial and postcranial referrals from southern France.', formations: 'Multiple Campanian-Maastrichtian units of southern France.', confidenceLimit: 'Do not combine all European rhabdodontid material under Rhabdodon.', uncertainties: ['R. septimanicus status', 'postcranial referrals']
    }),

    rinchenia: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 75-72 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Oviraptorosauria', 'Oviraptoridae'],
      diet: 'Herbivore or omnivore (uncertain)',
      description: 'Rinchenia mongoliensis was an oviraptorid from the Baruungoyot Formation of Mongolia, represented by a single partial skeleton with a crested skull, originally described as Oviraptor mongoliensis.',
      facts: ['The combination was separated from Oviraptor because of cranial and postcranial differences.', 'The type preserves a substantial skeleton but not a broad population sample.', 'Diet cannot be narrowed beyond likely omnivory or herbivory from this specimen alone.']
    }, 'The Baruungoyot Formation is late Campanian; the species should not be assigned the younger Nemegt age.', [
      P('Osmolska, Currie & Barsbold (2004), Oviraptorosauria systematic review', 'https://doi.org/10.1525/california/9780520242098.003.0010'), N('rinchenia')
    ], ['Only one principal individual is known.', 'The crest soft tissue, diet and exact oviraptorid relationships are uncertain.'], {
      score: 63, material: 'Single partial skeleton including crested skull and substantial postcranium.', formations: 'Baruungoyot Formation, Mongolia.', confidenceLimit: 'Population variation and exact diet cannot be established.', uncertainties: ['diet', 'crest function', 'fine phylogeny']
    }),

    rugops: R({
      period: 'Late Cretaceous', mya: 'Cenomanian, about 96-94 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Ceratosauria', 'Abelisauroidea', 'Abelisauridae'],
      description: 'Rugops primus was an abelisaurid theropod from the Echkar Formation of Niger, known from one partial skull and associated fragments rather than a skeleton.',
      facts: ['The skull roof bears texturing and openings, but elaborate skin display structures are speculative.', 'Its discovery helped document mid-Cretaceous Gondwanan abelisaurid distribution.', 'Body size, forelimbs and most postcranial anatomy are inferred from relatives.']
    }, 'The Echkar type horizon is Cenomanian, close to 95 Ma.', [
      P('Sereno et al. (2004), new dinosaurs linking southern landmasses including Rugops', 'https://doi.org/10.1098/rspb.2004.2692'), N('rugops')
    ], ['Only one partial skull is securely known.', 'Its exact abelisaurid position and adult size remain uncertain.'], {
      score: 32, material: 'Single incomplete skull with very limited additional material.', formations: 'Echkar Formation, Niger.', confidenceLimit: 'Postcranial proportions, mass and soft-tissue ornament are not directly known.', uncertainties: ['size', 'soft-tissue ornament', 'phylogenetic position']
    }),

    nedoceratops: R({
      period: 'Late Cretaceous', mya: 'latest Maastrichtian, about 67-66 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ceratopsia', 'Ceratopsidae', 'Chasmosaurinae'],
      length: null,
      taxonomicStatus: 'disputed: valid genus in some studies, unusual Triceratops in others',
      description: 'Nedoceratops hatcheri is founded on a single chasmosaurine skull from the Lance Formation of Wyoming. Its lack of a nasal horn and small frill openings have produced an unresolved debate over whether it is distinct or an unusual Triceratops.',
      facts: ['No postcranial skeleton is securely associated with the type.', 'Farke found diagnostic differences supporting validity.', 'Scannella and Horner interpreted the skull as transitional morphology within Triceratops ontogeny; neither view should be hidden.']
    }, 'The Lance Formation specimen is latest Maastrichtian, immediately before the end-Cretaceous extinction.', [
      P('Farke (2011), anatomy and taxonomic status of Nedoceratops', 'https://doi.org/10.1371/journal.pone.0016196'), P('Scannella & Horner (2011), Nedoceratops as transitional morphology', 'https://doi.org/10.1371/journal.pone.0028705')
    ], ['Its generic validity remains actively disputed.', 'The only skull may include individual, pathological or ontogenetic variation.'], {
      score: 34, material: 'Single nearly complete skull; no secure postcranium.', formations: 'Lance Formation, Wyoming, USA.', confidenceLimit: 'Do not reconstruct a separate full-bodied genus without stating the Triceratops hypothesis.', uncertainties: ['validity', 'ontogeny', 'possible pathology']
    }, 'needs-specialist-review'),

    pyroraptor: R({
      period: 'Late Cretaceous', mya: 'late Campanian-early Maastrichtian, about 72 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Maniraptora', 'Dromaeosauridae'],
      description: 'Pyroraptor olympius was a small dromaeosaurid from Provence, France, based on a handful of disarticulated bones including a curved second-toe claw, teeth and limb elements.',
      facts: ['The French type material is extremely fragmentary and does not preserve a full skeleton.', 'Some Spanish teeth and bones have been referred, but their genus-level identity is uncertain.', 'Feathering is probable from dromaeosaurid bracketing; swimming ability and exact colour are unsupported.']
    }, 'The type locality near the Campanian-Maastrichtian boundary supports a much narrower range than 84-71 Ma.', [
      P('Allain & Taquet (2000), original description of Pyroraptor olympius', 'https://doi.org/10.1671/0272-4634(2000)020%5B0404:ANGODD%5D2.0.CO;2'), N('pyroraptor')
    ], ['The diagnosis and exact dromaeosaurid position are limited by sparse material.', 'Spanish referrals need specimen-level review.'], {
      score: 19, material: 'Several isolated teeth and limb bones, including a pedal ungual; no articulated skeleton.', formations: 'Argiles et Gres a Reptiles Formation, Provence, France; disputed Spanish referrals.', confidenceLimit: 'Full-body proportions, size, plumage details and aquatic behaviour are unknown.', uncertainties: ['referrals', 'phylogenetic position', 'size']
    }),

    megalosaurus: R({
      period: 'Middle Jurassic', mya: 'middle Bathonian, about 168-166 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Megalosauroidea', 'Megalosauridae'],
      description: 'Megalosaurus bucklandii was a large megalosaurid from the Taynton Limestone Formation of Oxfordshire. Modern revision restricts the genus to the type dentary and a limited set of comparable local bones, not the worldwide wastebasket once called Megalosaurus.',
      facts: ['The lectotype is a partial right dentary with teeth.', 'Some cranial, vertebral, pelvic and limb bones from the same regional unit are referred, but no complete skeleton exists.', 'Most historical species named Megalosaurus have been removed or are dubious.']
    }, 'The reviewed age follows the middle Bathonian Taynton Limestone and does not import unrelated Megalosaurus referrals.', [
      P('Benson (2010), description and systematic revision of Megalosaurus bucklandii', 'https://doi.org/10.1111/j.1096-3642.2009.00569.x'), P('Benson et al. (2008), taxonomic status of Megalosaurus bucklandii', 'https://doi.org/10.1111/j.1475-4983.2008.00751.x')
    ], ['Association of referred bones with the dentary-bearing taxon is not direct.', 'Maximum adult size is not constrained by a complete individual.'], {
      score: 51, material: 'Lectotype dentary plus limited referred cranial and postcranial bones from the same regional unit.', formations: 'Taynton Limestone Formation, Oxfordshire, England.', confidenceLimit: 'Do not use the old global wastebasket record or call it a complete skeleton.', uncertainties: ['referral association', 'body size']
    }),

    minmi: R({
      period: 'Early Cretaceous', mya: 'lower Aptian, approximately 121-118 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Ankylosauria'],
      description: 'Minmi paravertebra was an Australian ankylosaur based on a partial skeleton from the Bungil Formation of Queensland. The much more complete skeleton formerly called Minmi sp. was renamed Kunbarrasaurus and must not supply Minmi anatomy.',
      facts: ['The holotype includes vertebrae, ribs and limb and armour elements but no well-preserved skull.', 'Paravertebral ossifications are prominent in the type.', 'Upper Albian Australian ankylosaur material once discussed under Minmi belongs to Kunbarrasaurus or other ankylosaurs and must not extend the range or anatomy of Minmi paravertebra.']
    }, 'The Minmi paravertebra holotype is from the lower Aptian Bungil Formation. Upper Albian Toolebuc and Allaru material belongs to Kunbarrasaurus or other ankylosaurs, not securely to Minmi.', [
      P('Frauenfelder et al. (2022), New Ankylosaurian Cranial Remains From the Lower Cretaceous (Upper Albian) Toolebuc Formation of Queensland, Australia', 'https://doi.org/10.3389/feart.2022.803505'), P('Leahey et al. (2015), Cranial osteology of the ankylosaur formerly known as Minmi sp. and naming of Kunbarrasaurus', 'https://doi.org/10.7717/peerj.1475'), P('Molnar (1980), original description of Minmi paravertebra', 'https://www.biodiversitylibrary.org/page/48741913')
    ], ['The holotype needs renewed detailed description.', 'Many popular traits belong to Kunbarrasaurus, not Minmi.'], {
      score: 31, material: 'Partial postcranial holotype with vertebrae, limbs and osteoderms; skull poorly represented.', formations: 'Bungil Formation, Queensland, Australia.', confidenceLimit: 'Do not transfer the complete Kunbarrasaurus skull and skeleton to Minmi.', uncertainties: ['phylogenetic position', 'holotype diagnosis']
    }, 'needs-specialist-review'),

    ornitholestes: R({
      period: 'Late Jurassic', mya: 'Kimmeridgian, about 154-152 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria'],
      description: 'Ornitholestes hermanni was a small coelurosaurian theropod from the Morrison Formation, known primarily from one incomplete but articulated skeleton with a crushed skull.',
      facts: ['The holotype preserves much of the skeleton but lacks portions and has a distorted skull.', 'A nasal horn once reconstructed from a displaced bone is not supported.', 'Carnivory and bipedality are secure; prey choice, plumage extent and exact coelurosaur branch are uncertain.']
    }, 'The Bone Cabin Quarry holotype is Kimmeridgian Morrison Formation, near 154-152 Ma.', [
      P('Osborn (1903), original description of Ornitholestes', 'https://www.biodiversitylibrary.org/page/26891815'), P('Senter (2006), forelimb function in Ornitholestes and other theropods', 'https://doi.org/10.1111/j.1475-4983.2006.00585.x')
    ], ['Only one principal skeleton is known.', 'Skull distortion complicates reconstruction and relationships.'], {
      score: 71, material: 'Single incomplete articulated skeleton with crushed skull and substantial postcranium.', formations: 'Morrison Formation, Wyoming, USA.', confidenceLimit: 'No nasal horn; colour, detailed plumage and prey are unknown.', uncertainties: ['skull reconstruction', 'fine phylogeny']
    }),

    ouranosaurus: R({
      period: 'Early Cretaceous', mya: 'Aptian-Albian, about 115-105 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Iguanodontia', 'Styracosterna'],
      description: 'Ouranosaurus nigeriensis was a large iguanodontian from the Elrhaz Formation of Niger, known from two substantial skeletons including skull material.',
      facts: ['Tall neural spines along the trunk and tail are directly preserved.', 'Whether they supported a sail, fatty hump or another soft-tissue profile is unresolved.', 'It had a dental battery and broad herbivorous feeding anatomy; exact diet and habitual gait are not directly observed.']
    }, 'The Elrhaz Formation is broadly Aptian-Albian; the single 112 Ma value is illustrative rather than a direct date.', [
      P('Taquet (1976), monograph on Ouranosaurus nigeriensis', 'https://sciencepress.mnhn.fr/sites/default/files/articles/pdf/memoiresMNHN-Zoologie-1976-1.pdf'), P('Lockwood et al. (2025), evolution of elongated neural spines in iguanodontians', 'https://doi.org/10.1002/spp2.70034')
    ], ['Soft tissue over the neural spines is unknown.', 'Its exact position among styracosternans varies.'], {
      score: 81, material: 'Two substantial partial skeletons including skulls and tall-spined axial columns.', formations: 'Elrhaz Formation, Niger.', confidenceLimit: 'The bones establish tall spines, not a particular sail or hump.', uncertainties: ['soft-tissue profile', 'locomotor emphasis', 'phylogenetic position']
    }),

    oviraptor: R({
      period: 'Late Cretaceous', mya: 'Campanian, about 75-71 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Oviraptorosauria', 'Oviraptoridae'],
      diet: null,
      description: 'Oviraptor philoceratops was an oviraptorid from the Djadokhta Formation of Mongolia, known from one incomplete skeleton with a crushed skull found beside a nest. Many complete museum reconstructions actually represent Citipati.',
      facts: ['The eggs near the type are oviraptorosaur eggs, overturning the original idea that it was stealing Protoceratops eggs.', 'The holotype is less complete and has a lower crest than the animal often illustrated as Oviraptor.', 'Brooding is strongly evidenced across oviraptorids, but exact diet remains unresolved.']
    }, 'The Djadokhta type horizon is Campanian, approximately 75-71 Ma.', [
      P('Osborn (1924), original description of Oviraptor', 'https://digitallibrary.amnh.org/items/5dd7157d-f9ea-4d37-89d7-bd7a6c049de6'), P('Norell et al. (1994), dinosaur embryos and identity of oviraptorosaur eggs', 'https://doi.org/10.1126/science.266.5186.779')
    ], ['The crushed type skull leaves crest reconstruction uncertain.', 'Diet is not settled.', 'Much familiar anatomy belongs to Citipati.'], {
      score: 57, material: 'Single incomplete skeleton with crushed skull associated with an egg nest.', formations: 'Djadokhta Formation, Mongolia.', confidenceLimit: 'Do not use Citipati specimens as Oviraptor anatomy or call it a proven egg thief.', uncertainties: ['crest shape', 'diet', 'nest association details']
    }),

    pachycephalosaurus: R({
      period: 'Late Cretaceous', mya: 'latest Maastrichtian, about 69-66 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Pachycephalosauria', 'Pachycephalosauridae'],
      description: 'Pachycephalosaurus wyomingensis was a large dome-headed pachycephalosaurid from latest Cretaceous western North America, known mainly from skull roofs and incomplete skulls; postcranial remains are scarce.',
      facts: ['Histology and morphology support interpreting Dracorex as a juvenile and Stygimoloch as a younger stage or close taxon, though details remain debated.', 'The thick dome is directly preserved, but combat style is inferred rather than observed.', 'Body size is less secure than skull anatomy because associated skeletons are rare.']
    }, 'Secure records are latest Maastrichtian Hell Creek, Lance and equivalent units.', [
      P('Horner & Goodwin (2009), extreme cranial ontogeny in Pachycephalosaurus', 'https://doi.org/10.1371/journal.pone.0007626'), P('Goodwin & Evans (2016), juvenile Pachycephalosaurus cranial development', 'https://doi.org/10.1080/02724634.2016.1078343')
    ], ['The status of Stygimoloch and extent of synonymy remain discussed.', 'Head-striking mechanics and diet are unresolved.'], {
      score: 64, material: 'Multiple domes and partial skulls across growth stages; sparse associated postcranium.', formations: 'Hell Creek, Lance and equivalent formations, USA.', confidenceLimit: 'Skull ontogeny is much better known than full-body proportions or behaviour.', uncertainties: ['Stygimoloch synonymy', 'dome function', 'diet']
    }),

    pachyrhinosaurus: R({
      period: 'Late Cretaceous', mya: 'late Campanian-Maastrichtian, about 73-69 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ceratopsia', 'Ceratopsidae', 'Centrosaurinae', 'Pachyrhinosaurini'],
      description: 'Pachyrhinosaurus was a centrosaurine ceratopsid represented by three named North American species and large bonebeds. The type species P. canadensis comes from the Horseshoe Canyon Formation and bears a thick nasal boss rather than a conventional nasal horn.',
      facts: ['Bonebeds contain many disarticulated individuals and growth stages, not one herd frozen in behaviour.', 'Boss and frill ornament changed markedly during growth.', 'Migration and horn-covering shape are plausible but not directly demonstrated.']
    }, 'The genus-level range spans late Campanian P. lakustai through Maastrichtian P. canadensis and P. perotorum; species ages must not be merged.', [
      P('Sternberg (1950), original description of Pachyrhinosaurus canadensis', 'https://doi.org/10.4095/105057'), P('Currie, Langston & Tanke (2008), monograph on Pachyrhinosaurus lakustai', 'https://doi.org/10.1139/9780660198194')
    ], ['Species boundaries and some bonebed referrals remain under study.', 'Keratinous boss covering and migration are uncertain.'], {
      score: 90, material: 'Numerous skulls, partial skeletons and multi-individual bonebeds across three species.', formations: 'Wapiti, Horseshoe Canyon and Prince Creek formations, Canada and USA.', confidenceLimit: 'Separate species and growth stages; bonebeds do not directly prove migration.', uncertainties: ['boss soft tissue', 'migration', 'some species referrals']
    }),

    plateosaurus: R({
      period: 'Late Triassic', mya: 'Norian-Rhaetian, about 214-204 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Plateosauridae'],
      description: 'Plateosaurus was a large non-sauropodan sauropodomorph from Late Triassic Europe, represented by many skeletons and bonebed assemblages. Species-level nomenclature, especially P. engelhardti versus P. trossingensis, has a complex history.',
      facts: ['The Trossingen and Frick bonebeds preserve many individuals of different sizes.', 'Biomechanical work favours habitual bipedality for adults rather than elephant-like quadrupedal walking.', 'Size varied substantially among mature individuals, consistent with developmental plasticity.']
    }, 'Well-dated occurrences span Norian-Rhaetian European strata; species-level horizons should be retained separately.', [
      P('Mallison (2010), digital reconstruction and locomotor range of Plateosaurus', 'https://doi.org/10.4202/app.2009.0075'), P('Sander & Klein (2005), developmental plasticity in Plateosaurus', 'https://doi.org/10.1126/science.1120125')
    ], ['Species nomenclature and assignment of some bonebeds remain contested.', 'Mass estimates vary strongly with specimen and method.'], {
      score: 96, material: 'Dozens of partial to nearly complete skeletons and skulls from several European bonebeds.', formations: 'Lowenstein and Trossingen formations and equivalent European units.', confidenceLimit: 'Do not treat all individuals and named species as one uniform body size.', uncertainties: ['species nomenclature', 'individual size variation']
    }),

    polacanthus: R({
      period: 'Early Cretaceous', mya: 'Barremian, about 130-125 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Thyreophora', 'Ankylosauria', 'Nodosauridae sensu lato'],
      description: 'Polacanthus foxii was an armoured dinosaur from the Wessex Formation of the Isle of Wight, based on an incomplete, disarticulated postcranial skeleton with extensive armour but no skull.',
      facts: ['The holotype preserves pelvis, hindlimb, vertebral and osteoderm material including a pelvic shield.', 'Skull shape and much of the front-body armour are inferred from relatives.', 'Whether polacanthines form a distinct family or a basal nodosaurid grade remains debated.']
    }, 'The Wessex Formation type is Barremian, approximately 130-125 Ma.', [
      P('Blows (1987), osteology and systematic position of Polacanthus', 'https://palass.org/publications/palaeontology-journal/archive/30/3/article_pp557-580'), N('polacanthus')
    ], ['The holotype lacks a skull and forequarters.', 'Polacanthine relationships remain unstable.'], {
      score: 48, material: 'Incomplete postcranial skeleton with pelvis, hindlimb, vertebrae and abundant armour; skull absent.', formations: 'Wessex Formation, Isle of Wight, UK.', confidenceLimit: 'Head, tail end and exact armour sequence are reconstructed.', uncertainties: ['phylogenetic position', 'skull anatomy']
    }),

    protoceratops: R({
      period: 'Late Cretaceous', mya: 'Campanian, about 75-71 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ceratopsia', 'Neoceratopsia', 'Protoceratopsidae'],
      description: 'Protoceratops andrewsi was a sheep-sized neoceratopsian from the Djadokhta Formation of Mongolia, known from abundant skulls and skeletons across growth stages.',
      facts: ['The famous fighting specimen preserves direct interaction with Velociraptor.', 'Eggs historically assigned to Protoceratops were oviraptorosaur eggs; some genuine protoceratopsian nesting evidence is now known separately.', 'Large samples document growth, but strong sexual dimorphism in frill shape has not been demonstrated securely.']
    }, 'The core P. andrewsi record is Campanian Djadokhta Formation; P. hellenikorhinus is a separate species from Bayan Mandahu.', [
      P('Brown & Schlaikjer (1940), anatomy and growth series of Protoceratops', 'https://digitallibrary.amnh.org/items/427f573c-56ce-4dde-9a1d-6c4a3f66400c'), P('Maiorino et al. (2015), sexual dimorphism test in Protoceratops', 'https://doi.org/10.1371/journal.pone.0126464')
    ], ['Species boundaries and purported sexual dimorphism continue to be tested.', 'Colour and social structure are unknown.'], {
      score: 97, material: 'Hundreds of skulls and skeletons from hatchling to adult stages, including exceptional articulated specimens.', formations: 'Djadokhta Formation, Mongolia; related Bayan Mandahu species in China.', confidenceLimit: 'Abundance supports anatomy and growth, not every claimed behaviour or sex difference.', uncertainties: ['sexual dimorphism', 'species separation', 'sociality']
    }),

    psittacosaurus: R({
      period: 'Early Cretaceous', mya: 'Barremian-Albian, about 126-101 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ceratopsia', 'Psittacosauridae'],
      description: 'Psittacosaurus was a diverse Early Cretaceous ceratopsian genus from Asia, represented by hundreds of specimens and numerous named species. The type species P. mongoliensis is anatomically well known, but genus-wide claims must distinguish species.',
      facts: ['Exceptional specimens preserve tail bristles, skin outlines, pigmentation patterns, a cloacal region and stomach contents.', 'Those soft-tissue observations belong to particular specimens and species, not automatically every Psittacosaurus.', 'Juveniles were more quadrupedal and adults predominantly bipedal in major growth studies.']
    }, 'The genus spans multiple Barremian-Albian formations; individual species occupy narrower intervals.', [
      P('Sereno (2010), taxonomic review of Psittacosaurus', 'https://www.researchgate.net/publication/270162979_Taxonomy_cranial_morphology_and_relationships_of_parrot-beaked_dinosaurs_Psittacosaurus'), P('Vinther et al. (2016), three-dimensional camouflage in Psittacosaurus', 'https://doi.org/10.1016/j.cub.2016.06.065'), P('Vinther et al. (2021), cloacal opening in Psittacosaurus', 'https://doi.org/10.1016/j.cub.2020.12.039')
    ], ['Several named species may be synonyms or based on juvenile differences.', 'Soft-tissue evidence is specimen-specific.'], {
      score: 98, material: 'Hundreds of skulls and skeletons across many growth stages and species, including exceptional soft tissue.', formations: 'Multiple Lower Cretaceous formations in China, Mongolia and Siberia.', confidenceLimit: 'Separate species and specimens when discussing colour, bristles, cloaca or diet.', uncertainties: ['species-level taxonomy', 'distribution of soft-tissue traits']
    }),

    maiasaura: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 77-75 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Hadrosauridae', 'Saurolophinae', 'Brachylophosaurini'],
      description: 'Maiasaura peeblesorum was a hadrosaurid from the Two Medicine Formation of Montana, documented by nesting grounds, eggs, juveniles, adults and large bonebeds.',
      facts: ['Nest colonies and very young individuals in nests show repeated nesting-site use and extended nest occupancy.', 'The evidence is consistent with parental care but does not specify which sex cared for young or every detail of provisioning.', 'Large growth-series samples document rapid growth and population structure.']
    }, 'The Two Medicine Maiasaura record is late Campanian, approximately 76.7-75 Ma.', [
      P('Horner & Makela (1979), nesting grounds of Maiasaura', 'https://doi.org/10.1038/282296a0'), P('Woodward et al. (2015), life history of Maiasaura from bone histology', 'https://doi.org/10.1017/pab.2015.19')
    ], ['Details of parental provisioning and social structure exceed the direct evidence.', 'Bonebeds may combine mortality events.'], {
      score: 98, material: 'Thousands of bones, many skeletons, eggs, nests and a growth series from embryos to adults.', formations: 'Two Medicine Formation, Montana, USA.', confidenceLimit: 'Nesting and growth are secure; specific family roles and herd behaviour remain interpretations.', uncertainties: ['parental-care mechanism', 'bonebed taphonomy']
    }),

    majungasaurus: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 70-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Ceratosauria', 'Abelisauridae', 'Majungasaurinae'],
      description: 'Majungasaurus crenatissimus was an abelisaurid from the Maevarano Formation of Madagascar, represented by numerous skulls and postcranial remains from multiple individuals.',
      facts: ['Its short deep skull and reduced forelimbs are directly documented by a strong sample.', 'Majungasaurus tooth marks on Majungasaurus bones provide evidence of cannibalistic feeding, though not necessarily active predation.', 'Growth studies indicate slow, prolonged growth relative to many large theropods.']
    }, 'The Maevarano Formation sample is late Maastrichtian.', [
      P('Sampson & Krause (eds., 2007), craniofacial anatomy and palaeobiology of Majungasaurus', 'https://www.researchgate.net/publication/228681379_Majungasaurus_crenatissimus_Theropoda_Abelisauridae_from_the_Late_Cretaceous_of_Madagascar'), P('Rogers, Krause & Rogers (2003), cannibalism in Majungatholus/Majungasaurus', 'https://doi.org/10.1038/nature01532')
    ], ['Cannibal tooth marks do not distinguish scavenging from predation.', 'Some composite skeletal proportions unite individuals.'], {
      score: 95, material: 'Multiple skulls and extensive postcranial material from many individuals, collectively nearly all skeletal regions.', formations: 'Maevarano Formation, Madagascar.', confidenceLimit: 'Cannibal feeding is secure, but the behavioural circumstances are unknown.', uncertainties: ['scavenging versus predation', 'individual association']
    }),

    microraptor: R({
      period: 'Early Cretaceous', mya: 'Aptian, about 120 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Maniraptora', 'Dromaeosauridae', 'Microraptorinae'],
      description: 'Microraptor was a small feathered dromaeosaurid from the Jiufotang Formation of Liaoning, known from hundreds of articulated specimens, especially M. gui; species limits within the genus remain debated.',
      facts: ['Long flight feathers on arms and legs form a four-winged aerodynamic configuration.', 'Aerodynamic studies support gliding or some aerial capacity, while launch and powered-flight performance remain debated.', 'Gut contents document a varied carnivorous diet including birds, mammals, lizards and fish in different specimens.']
    }, 'The main Jiufotang sample is Aptian, close to 120 Ma; species and localities should not be merged into a broader generic range without review.', [
      P('Xu et al. (2003), four-winged Microraptor from China', 'https://doi.org/10.1038/nature01342'), P('O\'Connor et al. (2011), Microraptor with ingested bird remains', 'https://doi.org/10.1073/pnas.1117727108')
    ], ['Species synonymy within Microraptor is unresolved.', 'Powered flight versus gliding remains debated.'], {
      score: 99, material: 'Hundreds of articulated feathered skeletons, several with gut contents.', formations: 'Jiufotang Formation, Liaoning, China.', confidenceLimit: 'Aerial capacity is well supported but exact flight stroke, launch mode and species-wide colour vary by specimen.', uncertainties: ['species limits', 'flight mode']
    }),

    muttaburrasaurus: R({
      period: 'Early-Late Cretaceous boundary', mya: 'late Albian-Cenomanian, about 105-100 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Rhabdodontomorpha'],
      description: 'Muttaburrasaurus langdoni was a large Australian ornithopod known from two partial skeletons and additional bones, including two skulls. Recent analyses place it among early-diverging iguanodontians, often close to Rhabdodontomorpha.',
      facts: ['The holotype and second skull differ in ways that may reflect variation, deformation or taxonomy.', 'The enlarged nasal region is preserved, but a resonating or display function is speculative.', 'Herbivory is secure; a special omnivorous diet proposed from tooth form is not established.']
    }, 'Material comes from upper Albian to Cenomanian units; the old 112-99 Ma span is too broad.', [
      P('Bartholomai & Molnar (1981), original description of Muttaburrasaurus', 'https://www.biodiversitylibrary.org/page/48741695'), P('Dieudonne et al. (2021), phylogenetic relationships of Muttaburrasaurus and rhabdodontomorphs', 'https://doi.org/10.1080/08912963.2020.1793979')
    ], ['The two principal skulls need renewed comparative study.', 'Fine phylogenetic position and nasal function remain unsettled.'], {
      score: 69, material: 'Two partial skeletons with skulls plus isolated referred remains.', formations: 'Mackunda and Allaru formations, Queensland, Australia.', confidenceLimit: 'Nasal display, vocalisation and omnivory are unsupported hypotheses.', uncertainties: ['skull variation', 'phylogenetic position', 'nasal function']
    }),

    neovenator: R({
      period: 'Early Cretaceous', mya: 'Barremian, about 130-125 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Tetanurae', 'Allosauroidea', 'Carcharodontosauria'],
      description: 'Neovenator salerii was a large allosauroid theropod from the Wessex Formation of the Isle of Wight, known from one relatively complete partial skeleton with skull and postcranial material.',
      facts: ['The holotype and associated discoveries preserve substantial cranial, vertebral, girdle and limb anatomy.', 'Its placement as a basal carcharodontosaurian is common, while the content of Neovenatoridae varies among analyses.', 'Pathologies are present in the type, but stories about their causes or survival are inferential.']
    }, 'The Wessex Formation type horizon is Barremian, approximately 130-125 Ma.', [
      P('Brusatte, Benson & Hutt (2008), osteology of Neovenator salerii', 'https://doi.org/10.1080/25761900.2008.12452864'), P('Benson, Carrano & Brusatte (2010), new clade of archaic large-bodied theropods', 'https://doi.org/10.1007/s00114-009-0614-x')
    ], ['The limits and membership of Neovenatoridae remain debated.', 'Maximum body size is based chiefly on one individual.'], {
      score: 84, material: 'One relatively complete partial skeleton with skull, axial column, girdles and limbs.', formations: 'Wessex Formation, Isle of Wight, UK.', confidenceLimit: 'Population variation and maximum size are not known from a large sample.', uncertainties: ['allnosauroid subclade placement', 'pathology interpretation']
    }),

    nigersaurus: R({
      period: 'Early Cretaceous', mya: 'Aptian-Albian, about 115-105 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', 'Diplodocoidea', 'Rebbachisauridae'],
      description: 'Nigersaurus taqueti was a rebbachisaurid sauropod from the Elrhaz Formation of Niger, represented by multiple partial skeletons and unusually complete, delicate skull material.',
      facts: ['Its broad muzzle carried dental batteries with hundreds of replacement teeth.', 'The skull and neck support low browsing, but claims that it held its head permanently downward overstate biomechanical inference.', 'Several individuals collectively document much of the skeleton; no single complete skeleton is known.']
    }, 'The Elrhaz Formation is Aptian-Albian; the age remains formation-level rather than a precise 115-105 Ma lifespan.', [
      P('Sereno et al. (2007), structural extremes in Nigersaurus', 'https://doi.org/10.1371/journal.pone.0001230'), P('Sereno et al. (1999), Cretaceous sauropods from the Sahara', 'https://doi.org/10.1126/science.286.5443.1342')
    ], ['Habitual head posture and exact vegetation preference remain debated.', 'Skeletons are composite across individuals.'], {
      score: 91, material: 'Multiple partial skeletons including exceptional skulls, jaws, neck and postcranial material.', formations: 'Elrhaz Formation, Niger.', confidenceLimit: 'Dental specialisation is direct; precise feeding height and permanent head posture are not.', uncertainties: ['feeding posture', 'individual association']
    }),

    nothronychus: R({
      period: 'Late Cretaceous', mya: 'Turonian, about 93-90 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Maniraptora', 'Therizinosauria', 'Therizinosauridae'],
      description: 'Nothronychus was a derived therizinosaur from the Turonian of the western United States, represented by two species known from partial postcranial skeletons; N. graffami also preserves more complete axial and girdle anatomy.',
      facts: ['Large manual claws, a broad pelvis and leaf-shaped teeth support a specialised herbivorous or omnivorous theropod body plan.', 'No complete skull is known.', 'Feathers are likely by phylogenetic bracketing but are not directly preserved with the named skeletons.']
    }, 'Both named species are Turonian, around 93-90 Ma; the genus is not limited to a single 91 Ma point.', [
      P('Hedrick et al. (2015), The Slothful Claw: Osteology and Taphonomy of Nothronychus mckinleyi and N. graffami', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4465624/'), P('Zanno et al. (2009), Nothronychus graffami anatomy', 'https://doi.org/10.1098/rspb.2009.1029')
    ], ['Species-level differences and exact diet remain open.', 'Cranial anatomy and integument are incomplete.'], {
      score: 70, material: 'Two partial skeletons representing two species, with extensive axial and appendicular material but limited skull remains.', formations: 'Moreno Hill Formation, New Mexico, and Tropic Shale, Utah, USA.', confidenceLimit: 'Exact skull shape, feather distribution and precise food are not directly preserved.', uncertainties: ['diet breadth', 'integument', 'species comparison']
    }),

    ornithomimus: R({
      period: 'Late Cretaceous', mya: 'Campanian-Maastrichtian, about 77-69 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Coelurosauria', 'Ornithomimosauria', 'Ornithomimidae'],
      diet: null,
      description: 'Ornithomimus was an ostrich-like ornithomimid from western North America. The well-known species O. edmontonicus is represented by multiple skeletons, including specimens preserving feather impressions; the type species O. velox is far more fragmentary.',
      facts: ['Juvenile and adult specimens show down-like body feathers, with larger arm feathers in adults.', 'The edentulous beak is preserved, but herbivory, omnivory and filter-feeding proposals remain debated.', 'Genus-level ranges must distinguish O. edmontonicus from fragmentary O. velox and historical referrals.']
    }, 'Secure species records span late Campanian to early Maastrichtian formations; a range to 66 Ma relies on disputed referrals.', [
      P('Zelenitsky et al. (2012), feathered non-avian dinosaurs from North America', 'https://doi.org/10.1126/science.1225376'), P('Claessens & Loewen (2016), redescription of Ornithomimus velox', 'https://doi.org/10.1080/02724634.2015.1034593')
    ], ['Diet is unresolved.', 'Species content and latest occurrences require specimen-level review.'], {
      score: 89, material: 'Multiple articulated skeletons for O. edmontonicus, including feathered specimens; fragmentary O. velox type.', formations: 'Dinosaur Park and Horseshoe Canyon formations and Denver Formation type material, North America.', confidenceLimit: 'Separate species when discussing feathers, age and completeness.', uncertainties: ['diet', 'species referrals', 'latest range']
    }),

    parasaurolophus: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 77-73 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ornithopoda', 'Hadrosauridae', 'Lambeosaurinae', 'Parasaurolophini'],
      description: 'Parasaurolophus was a long-crested lambeosaurine hadrosaurid from western North America, represented by three named species with several skulls and partial skeletons.',
      facts: ['The hollow crest contains nasal passages and changed shape during growth.', 'Acoustic resonance and visual display are well-supported functional hypotheses, but exact calls cannot be recovered.', 'Species differ in crest curvature and stratigraphic distribution and should not be merged into one skeleton.']
    }, 'The genus spans late Campanian Dinosaur Park, Kaiparowits and Kirtland formations, approximately 77-73 Ma.', [
      P('Gates et al. (2021), new skull and ontogeny of Parasaurolophus', 'https://doi.org/10.7717/peerj.10669'), P('Weishampel (1981), acoustic analyses of lambeosaurine crests', 'https://doi.org/10.1017/S0094837300004036')
    ], ['Exact crest sounds and soft-tissue structures remain unknown.', 'Species-level referral of fragmentary material is difficult.'], {
      score: 91, material: 'Several skulls and partial skeletons across three species and growth stages.', formations: 'Dinosaur Park, Kaiparowits and Kirtland formations, Canada and USA.', confidenceLimit: 'Crest acoustics are modelled hypotheses, not recordings; keep species separate.', uncertainties: ['exact vocalisation', 'fragmentary referrals']
    }),

    pentaceratops: R({
      period: 'Late Cretaceous', mya: 'late Campanian, about 76-74 million years ago',
      taxonomy: ['Dinosauria', 'Ornithischia', 'Ceratopsia', 'Ceratopsidae', 'Chasmosaurinae'],
      description: 'Pentaceratops sternbergii was a chasmosaurine ceratopsid from the Kirtland Formation of New Mexico, known from several skulls and partial skeletons with a deep frill and long brow horns.',
      facts: ['The name refers to three true facial horns plus elongated cheek projections.', 'OMNH 10165, once reconstructed as a giant Pentaceratops, was proposed as Titanoceratops; that separation remains debated.', 'Exact frill soft tissues and horn use are unknown.']
    }, 'Secure P. sternbergii material is late Campanian Kirtland Formation, around 75.9-73.4 Ma.', [
      P('Lehman (1993), new data on Pentaceratops sternbergii', 'https://doi.org/10.1017/S0022336000032200'), P('Longrich (2011), Titanoceratops proposal for OMNH 10165', 'https://doi.org/10.1016/j.cretres.2010.12.007')
    ], ['The identity of OMNH 10165 remains disputed.', 'Some historical species and referrals have been reassigned.'], {
      score: 80, material: 'Multiple partial skulls and skeletons; some referrals of disputed identity.', formations: 'Kirtland Formation, New Mexico, USA.', confidenceLimit: 'Do not use OMNH 10165 to define Pentaceratops size without noting the Titanoceratops debate.', uncertainties: ['OMNH 10165 identity', 'species referrals']
    }),

    rajasaurus: R({
      period: 'Late Cretaceous', mya: 'Maastrichtian, about 70-66 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Theropoda', 'Ceratosauria', 'Abelisauridae', 'Majungasaurinae'],
      description: 'Rajasaurus narmadensis was an abelisaurid theropod from the Lameta Formation of India, based on an associated partial skull and postcranial skeleton assembled from a locality-level collection.',
      facts: ['The skull roof bears a low midline horn.', 'The material is incomplete but includes braincase, vertebral, pelvic and hindlimb elements.', 'Its close relationship to Majungasaurus supports Gondwanan biogeographic comparisons, while exact size remains approximate.']
    }, 'The Lameta Formation type material is Maastrichtian and close to the end of the Cretaceous.', [
      P('Wilson et al. (2003), a new abelisaurid from the Lameta Formation', 'https://hdl.handle.net/2027.42/48667'), N('rajasaurus')
    ], ['Association of all locality bones and exact individual count require care.', 'Adult size is not directly constrained by a complete skeleton.'], {
      score: 59, material: 'Associated partial cranial and postcranial material including braincase, vertebrae, pelvis and hindlimb.', formations: 'Lameta Formation, Gujarat and Madhya Pradesh, India.', confidenceLimit: 'No complete skeleton and no secure skin or behaviour evidence.', uncertainties: ['individual association', 'body size']
    }),

    riojasaurus: R({
      period: 'Late Triassic', mya: 'Norian-Rhaetian, about 221-205 million years ago',
      taxonomy: ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Massopoda', 'Riojasauridae'],
      description: 'Riojasaurus incertus was a large non-sauropodan sauropodomorph from the Los Colorados Formation of Argentina, known from several partial skeletons; cranial material is limited and not associated with every skeleton.',
      facts: ['Robust limb bones show a heavy-bodied animal capable of quadrupedal support.', 'Whether adults were obligate quadrupeds or retained meaningful bipedal ability is biomechanically debated.', 'Herbivory is strongly inferred from sauropodomorph anatomy, while precise feeding height and body mass remain estimates.']
    }, 'The Los Colorados Formation is Norian-Rhaetian; its exact numerical duration remains under refinement.', [
      P('Bonaparte (1972), original description of Riojasaurus and Los Colorados dinosaurs', 'https://www.biodiversitylibrary.org/page/52135118'), P('Yates (2007), comparative anatomy of early sauropodomorphs in Special Papers in Palaeontology 77', 'https://palass.org/publications/special-papers-palaeontology/archive/77/article_pp9-55')
    ], ['Skull association and species-level variation need modern redescription.', 'Habitual gait is unresolved.'], {
      score: 72, material: 'Several partial postcranial skeletons with limited referred cranial material.', formations: 'Los Colorados Formation, La Rioja, Argentina.', confidenceLimit: 'Reconstructions combine individuals; exact gait and skull form remain uncertain.', uncertainties: ['cranial association', 'locomotion', 'mass']
    })
  };
})();
