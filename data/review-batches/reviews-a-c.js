/* Scientific review batch: genera A-C, excluding profiles already present in
   scientific-reviews.js.  This is deliberately separate so it can be checked
   and merged into the human-review ledger as one editorial batch. */
(function buildScientificReviewBatchAC() {
  'use strict';

  const scope = [
    'accepted name and broad classification',
    'geological age and formation',
    'name-bearing and referred fossil material',
    'skeletal-completeness wording',
    'size, diet and locomotion confidence',
    'profile narrative and residual uncertainty'
  ];
  const src = (type, citation, url) => ({ type, citation, url });
  const nhm = id => src('authoritative-museum-reference', 'Natural History Museum, Dino Directory: ' + id, 'https://www.nhm.ac.uk/discover/dino-directory/' + id + '.html');
  const theropod = (...rest) => ['Dinosauria', 'Saurischia', 'Theropoda', ...rest];
  const sauropod = (...rest) => ['Dinosauria', 'Saurischia', 'Sauropodomorpha', 'Sauropoda', ...rest];
  const sauropodomorph = (...rest) => ['Dinosauria', 'Saurischia', 'Sauropodomorpha', ...rest];
  const ornithischian = (...rest) => ['Dinosauria', 'Ornithischia', ...rest];
  const review = o => {
    const record = {
      period: o.period,
      mya: o.mya,
      taxonomy: o.taxonomy,
      description: o.description,
      facts: o.facts
    };
    if (o.taxonomicStatus) record.taxonomicStatus = o.taxonomicStatus;
    if (o.acceptedName === false) record.acceptedName = false;
    ['diet', 'locomotion', 'length', 'massKg'].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(o, field)) record[field] = o[field];
    });
    return {
      status: o.status || 'reviewed',
      reviewedOn: '2026-07-16',
      reviewer: 'Dinosauria A-C systematic scientific review',
      consensusScope: scope.slice(),
      record,
      ageReviewNote: o.age,
      sources: o.sources,
      residualUncertainty: o.uncertainties,
      evidence: {
        score: o.score,
        material: o.material,
        formations: o.formations,
        confidenceLimit: o.limit,
        uncertainties: o.uncertainties
      }
    };
  };

  window.SCIENTIFIC_REVIEW_BATCH_A_C = {
    aardonyx: review({
      period: 'Early Jurassic', mya: 'about 199-190 million years ago',
      taxonomy: sauropodomorph('Sauropodiformes'), score: 70, length: null, massKg: null,
      locomotion: 'primarily bipedal; capable of quadrupedal walking',
      description: 'Aardonyx celestae was an early sauropodomorph from the upper Elliot Formation of South Africa. It is known from disarticulated remains of at least two immature individuals and documents a body plan near the transition to obligate quadrupedal sauropods.',
      facts: ['The assemblage includes skull, vertebral, girdle and limb bones but is not one complete skeleton.', 'Limb proportions indicate habitual bipedalism remained possible; exact adult size and gait are uncertain.'],
      age: 'The upper Elliot Formation is Early Jurassic, most commonly placed in the Hettangian-Sinemurian.',
      material: 'Disarticulated cranial and postcranial bones from at least two immature individuals.', formations: ['upper Elliot Formation'],
      limit: 'Ontogenetically immature material prevents a secure adult-size estimate.', uncertainties: ['The bones are disarticulated.', 'Both principal individuals were immature.', 'Its exact position close to Sauropoda varies among analyses.'],
      sources: [src('original-description', 'Yates et al. (2010), A transitional sauropodomorph dinosaur from the Early Jurassic of South Africa', 'https://doi.org/10.1098/rspb.2009.1440'), nhm('aardonyx')]
    }),
    abelisaurus: review({
      period: 'Late Cretaceous', mya: 'about 83-80 million years ago', taxonomy: theropod('Ceratosauria', 'Abelisauridae'), score: 45, length: null, massKg: null,
      description: 'Abelisaurus comahuensis was a large abelisaurid theropod from the Anacleto Formation of Patagonia. The genus is based on a single incomplete skull; no confidently associated postcranial skeleton is known.',
      facts: ['The holotype is a partial skull lacking much of the snout and lower jaws.', 'Its body proportions, size and external covering must largely be inferred from other abelisaurids.'],
      age: 'The Anacleto Formation is generally dated to the early Campanian.', material: 'One incomplete skull.', formations: ['Anacleto Formation'],
      limit: 'Skull-only evidence does not support a precise body-length or mass estimate.', uncertainties: ['Only one specimen is securely known.', 'Its detailed position within Abelisauridae is unstable.'],
      sources: [src('original-description', 'Bonaparte & Novas (1985), Abelisaurus comahuensis, gen. et sp. nov.', 'https://www.naturalhistory.si.edu/sites/default/files/media/translated_publications/Bonaparte%20%26amp%3B%20Novas%201985.pdf'), src('comparative-anatomy', 'Paulina-Carabajal (2011), Braincases of abelisaurid theropods', 'https://doi.org/10.1111/j.1475-4983.2011.01055.x'), nhm('abelisaurus')]
    }),
    achelousaurus: review({
      period: 'Late Cretaceous', mya: 'about 75-74 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Ceratopsidae', 'Centrosaurinae'), score: 72,
      description: 'Achelousaurus horneri was a centrosaurine ceratopsid from the upper Two Medicine Formation of Montana. Several skulls and less complete postcranial remains show adults with roughened nasal and brow bosses rather than long horns.',
      facts: ['The sample includes three relatively complete adult skulls plus younger individuals.', 'The proposed evolutionary sequence involving Einiosaurus and Pachyrhinosaurus remains a phylogenetic interpretation, not a directly observed lineage.'],
      age: 'Type-locality evidence places the genus in the late Campanian upper Two Medicine Formation.', material: 'Several skulls and partial postcranial remains from multiple growth stages.', formations: ['upper Two Medicine Formation'],
      limit: 'Adult cranial anatomy is well supported, whereas the full postcranial skeleton and exact body mass are less secure.', uncertainties: ['Some referred juvenile material is less diagnostic.', 'Relationships among derived centrosaurines differ among analyses.'],
      sources: [src('original-description', 'Sampson (1995), Two new horned dinosaurs from the Upper Cretaceous Two Medicine Formation of Montana', 'https://www.jstor.org/stable/1306481'), nhm('achelousaurus')]
    }),
    achillobator: review({
      period: 'Late Cretaceous', mya: 'approximately 98-83 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Dromaeosauridae'), score: 50, length: null,
      description: 'Achillobator giganticus was a large dromaeosaurid from the Bayan Shireh Formation of Mongolia. It is based on one disarticulated partial skeleton; the association of all elements and its exact age within the formation remain uncertain.',
      facts: ['Preserved material includes jaws, vertebrae, pelvis and limb bones, but no complete articulated skeleton.', 'A large sickle-claw-bearing second toe is supported by its dromaeosaurid anatomy; hunting behaviour is not preserved.'],
      age: 'The Bayan Shireh Formation spans a broad mid- to Late Cretaceous interval and is not dated narrowly at the type locality.', material: 'One disarticulated partial cranial and postcranial assemblage.', formations: ['Bayan Shireh Formation'],
      limit: 'Incomplete, disarticulated material makes exact size and proportions uncertain.', uncertainties: ['The association of every listed element has been questioned.', 'The formation age and exact dromaeosaurid position remain broad.'],
      sources: [src('systematic-context', 'Turner, Makovicky & Norell (2012), A review of dromaeosaurid systematics and paravian phylogeny', 'https://digitallibrary.amnh.org/items/5e81f126-0bc9-4a56-81f6-675a3c027f9c'), nhm('achillobator')]
    }),
    acrocanthosaurus: review({
      period: 'Early Cretaceous', mya: 'about 115-108 million years ago', taxonomy: theropod('Tetanurae', 'Allosauroidea', 'Carcharodontosauria'), score: 88,
      description: 'Acrocanthosaurus atokensis was a very large carcharodontosaurian theropod from Aptian-Albian rocks of the south-central United States. Several partial skeletons, including one with much of the skull and postcranium, make its tall neural spines and general anatomy well documented.',
      facts: ['No specimen is literally complete, but NCSM 14345 preserves much of the skull and skeleton.', 'The elongated neural spines supported a raised ridge of soft tissue; its display or physiological role is unknown.'],
      age: 'Secure records come chiefly from the Antlers and Twin Mountains formations, around the Aptian-Albian boundary.', material: 'Multiple partial skeletons and skulls, including one substantially complete individual.', formations: ['Antlers Formation', 'Twin Mountains Formation'],
      limit: 'Overall dimensions are well constrained for a giant theropod, but mass estimates remain model-dependent.', uncertainties: ['The function and external form of the dorsal ridge are unknown.', 'Some isolated eastern North American referrals are uncertain.'],
      sources: [src('monographic-description', 'Stovall & Langston (1950), Acrocanthosaurus atokensis, a new genus and species of Lower Cretaceous Theropoda', 'https://nmdigital.unm.edu/digital/collection/bulletins/id/1053/'), src('cranial-reanalysis', 'Eddy & Clarke (2011), New information on the cranial anatomy of Acrocanthosaurus', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3061882/'), nhm('acrocanthosaurus')]
    }),
    aegyptosaurus: review({
      period: 'Late Cretaceous', mya: 'about 100-94 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Titanosauriformes', 'Titanosauria'), score: 32, length: null,
      description: 'Aegyptosaurus baharijensis was a titanosaur from Cenomanian rocks of Egypt. Its name-bearing bones were fragmentary and were destroyed during the Second World War, so much of its diagnosis now depends on Stromer\'s descriptions and illustrations.',
      facts: ['The type series included vertebrae and limb bones, not a complete skeleton.', 'Material from elsewhere in North Africa has been referred historically, but not all referrals can be demonstrated to belong to the type species.'],
      age: 'The type material came from the Cenomanian Bahariya Formation.', material: 'A fragmentary, now-destroyed type series of vertebral and appendicular bones.', formations: ['Bahariya Formation'],
      limit: 'No precise body plan or maximum size can be established from the lost fragmentary type.', uncertainties: ['The type material is destroyed.', 'The taxon needs modern specimen-based reassessment.', 'Many historical referrals are insecure.'],
      sources: [src('historical-monograph', 'Stromer (1932), Ergebnisse der Forschungsreisen Prof. E. Stromers in den Wuesten Aegyptens: Aegyptosaurus', 'https://www.biodiversitylibrary.org/page/28682600'), nhm('aegyptosaurus')]
    }),
    agilisaurus: review({
      period: 'Middle Jurassic', mya: 'about 168-163 million years ago', taxonomy: ornithischian('Neornithischia'), score: 82,
      diet: 'Herbivore or omnivore (uncertain)', locomotion: 'on 2 legs',
      description: 'Agilisaurus louderbacki was a small neornithischian from the lower Shaximiao Formation of Sichuan, China. Its holotype is a largely complete articulated skeleton with a skull, although parts of the forelimbs and other elements are incomplete.',
      facts: ['The single principal skeleton provides unusually good anatomical evidence for a small Middle Jurassic ornithischian.', 'It was bipedal, but diet beyond broad herbivory or omnivory cannot be demonstrated directly.'],
      age: 'The lower Shaximiao Formation is Middle Jurassic, commonly Bathonian-Callovian, rather than Late Jurassic.', material: 'One largely complete articulated skeleton with skull.', formations: ['lower Shaximiao Formation'],
      limit: 'Anatomy is well represented by one individual, but variation and adult size range are unknown.', uncertainties: ['Only one principal individual is known.', 'Its position near the base of Neornithischia differs among analyses.'],
      sources: [src('anatomical-study', 'Barrett, Butler & Knoll (2005), Small-bodied ornithischian dinosaurs from the Middle Jurassic of Sichuan', 'https://doi.org/10.1671/0272-4634(2005)025%5B0823:SODFTM%5D2.0.CO;2'), nhm('agilisaurus')]
    }),
    albertaceratops: review({
      period: 'Late Cretaceous', mya: 'about 78 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Ceratopsidae', 'Centrosaurinae'), score: 58, length: null,
      description: 'Albertaceratops nesmoi was a centrosaurine ceratopsid from the Oldman Formation of Alberta. It is securely represented by a nearly complete skull; much of the postcranial material first associated with it came from a different taxon later named Medusaceratops.',
      facts: ['The long brow horns and low nasal ornament are documented by the holotype skull.', 'The genus should not be described as known from a complete skeleton or extensive monospecific bonebed.'],
      age: 'The type locality lies in the middle Campanian Oldman Formation.', material: 'One nearly complete diagnostic skull plus limited comparable cranial material.', formations: ['Oldman Formation'],
      limit: 'Body dimensions and postcranial anatomy are inferred chiefly from related ceratopsids.', uncertainties: ['Postcranial referrals are limited.', 'Some cranial referrals and centrosaurine relationships remain under study.'],
      sources: [src('original-description', 'Ryan (2007), A new basal centrosaurine ceratopsid from the Oldman Formation', 'https://doi.org/10.1666/0022-3360(2007)81%5B376:ANBCCF%5D2.0.CO;2'), src('taxonomic-revision', 'Ryan, Russell & Hartman (2010), A new chasmosaurine ceratopsid from Montana and the status of the Judith River bonebed material', 'https://www.scotthartman.info/publication/ryan-2010-new/'), nhm('albertaceratops')]
    }),
    albertosaurus: review({
      period: 'Late Cretaceous', mya: 'about 71-68 million years ago', taxonomy: theropod('Coelurosauria', 'Tyrannosauroidea', 'Tyrannosauridae', 'Albertosaurinae'), score: 95,
      description: 'Albertosaurus sarcophagus was an albertosaurine tyrannosaurid from the lower Horseshoe Canyon Formation of Alberta. Numerous skulls and skeletons spanning growth stages, including a multi-individual bonebed, make it one of the better represented large theropods.',
      facts: ['The Dry Island bonebed preserves many individuals but does not by itself prove coordinated pack hunting.', 'Its lighter build and long hind limbs relative to Tyrannosaurus are anatomically supported; precise speed is not.'],
      age: 'Well-supported A. sarcophagus occurrences are early Maastrichtian in the lower Horseshoe Canyon Formation.', material: 'Numerous partial to near-complete skulls and skeletons from multiple growth stages.', formations: ['lower Horseshoe Canyon Formation'],
      limit: 'Anatomy and growth are well constrained, while maximum mass and behaviour remain model-dependent.', uncertainties: ['Bonebed formation and social behaviour are not equivalent.', 'Some historical records outside Alberta belong to other tyrannosaurids.'],
      sources: [src('bonebed-and-biology', 'Currie (1998), Possible evidence of gregarious behaviour in tyrannosaurids', 'https://doi.org/10.5281/zenodo.3737824'), src('growth-analysis', 'Erickson et al. (2004), Gigantism and comparative life-history parameters of tyrannosaurid dinosaurs', 'https://doi.org/10.1038/nature02699'), nhm('albertosaurus')]
    }),
    alectrosaurus: review({
      period: 'Late Cretaceous', mya: 'approximately 96-83 million years ago', taxonomy: theropod('Coelurosauria', 'Tyrannosauroidea'), score: 40, length: null,
      description: 'Alectrosaurus olseni was a medium-sized tyrannosauroid from the Iren Dabasu Formation of Inner Mongolia. The name is anchored by an associated hind limb; much cranial and forelimb material once assigned to it belongs to other theropods.',
      facts: ['The secure type material is chiefly a partial hind limb and foot.', 'Recent work supports tyrannosauroid affinities but cannot recover a complete body from the limited diagnostic material.'],
      age: 'The Iren Dabasu Formation has a debated, broad Late Cretaceous age, probably within the Cenomanian-Campanian interval.', material: 'An associated partial hind limb and limited referred remains.', formations: ['Iren Dabasu Formation'],
      limit: 'Sparse diagnostic material prevents precise size, skull and ecology claims.', uncertainties: ['Formation age is poorly constrained.', 'Historical cranial and forelimb referrals are excluded.', 'Its exact tyrannosauroid position is unresolved.'],
      sources: [src('systematic-revision', 'Mader & Bradley (1989), A redescription and revised diagnosis of Alectrosaurus olseni', 'https://doi.org/10.1080/02724634.1989.10011737'), src('recent-reappraisal', 'Carr et al. (2023), Reappraisal of Alectrosaurus olseni', 'https://doi.org/10.1080/02724634.2023.2199817'), nhm('alectrosaurus')]
    }),
    alioramus: review({
      period: 'Late Cretaceous', mya: 'about 72-66 million years ago', taxonomy: theropod('Coelurosauria', 'Tyrannosauroidea', 'Tyrannosauridae', 'Alioramini'), score: 72,
      description: 'Alioramus was a long-snouted tyrannosaurid from the Maastrichtian Nemegt Formation of Mongolia. A. remotus is based on a fragmentary skull and foot bones, while the better-preserved A. altai provides most detailed anatomical information.',
      facts: ['A. altai preserves a substantially complete skull and partial skeleton of a subadult.', 'The distinctive row of low nasal rugosities is real; their display role is an inference.'],
      age: 'Both named species come from the Maastrichtian Nemegt Formation.', material: 'One fragmentary type and one substantially complete skull with partial skeleton, plus limited referred remains.', formations: ['Nemegt Formation'],
      limit: 'The best skeleton is immature, making adult dimensions and ornament uncertain.', uncertainties: ['Species-level differences may include ontogenetic effects.', 'Adult body size is not securely known.'],
      sources: [src('osteological-description', 'Brusatte et al. (2012), Osteology of Alioramus altai', 'https://doi.org/10.1206/770.1'), src('comparative-cranial-anatomy', 'Bever et al. (2013), The braincase anatomy of Alioramus altai', 'https://doi.org/10.1206/810.1'), nhm('alioramus')]
    }),
    allosaurus: review({
      period: 'Late Jurassic', mya: 'about 155-148 million years ago', taxonomy: theropod('Tetanurae', 'Allosauroidea', 'Allosauridae'), score: 96,
      description: 'Allosaurus was a large allosaurid theropod abundant in the Morrison Formation of western North America. Many skulls and skeletons document its anatomy and growth, although the boundaries and diagnoses of named species remain under active revision.',
      facts: ['A. fragilis and A. jimmadseni are widely recognised North American species.', 'Bonebeds and healed injuries provide population-level evidence but do not establish pack hunting or a single feeding strategy.'],
      age: 'Secure North American material is Kimmeridgian-Tithonian in the Morrison Formation.', material: 'Many partial to near-complete skeletons and skulls from numerous individuals.', formations: ['Morrison Formation'],
      limit: 'Anatomy is exceptionally well sampled; species assignment, maximum mass and behaviour carry more uncertainty.', uncertainties: ['Species taxonomy and historical referrals require specimen-level treatment.', 'Social and hunting behaviour are not directly established.'],
      sources: [src('species-description', 'Chure & Loewen (2020), Cranial anatomy of Allosaurus jimmadseni', 'https://doi.org/10.7717/peerj.7803'), src('cranial-anatomy', 'Evers et al. (2020), Notes on the cheek region of the Late Jurassic theropod dinosaur Allosaurus', 'https://doi.org/10.7717/peerj.8493'), nhm('allosaurus')]
    }),
    alvarezsaurus: review({
      period: 'Late Cretaceous', mya: 'about 86-83 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Alvarezsauria'), score: 45,
      diet: null, locomotion: 'on 2 legs',
      description: 'Alvarezsaurus calvoi was a small alvarezsaurian theropod from the Bajo de la Carpa Formation of Patagonia. It is known from one incomplete, mostly postcranial skeleton; better-known anatomy of later alvarezsaurids should not be copied directly onto it.',
      facts: ['The holotype includes vertebrae, pelvis and hind-limb material but no diagnostic complete skull or forelimb.', 'Its bipedal stance is secure, whereas diet and specialised digging behaviour are inferred from the wider clade.'],
      age: 'The Bajo de la Carpa Formation is usually regarded as Santonian.', material: 'One incomplete postcranial skeleton.', formations: ['Bajo de la Carpa Formation'],
      limit: 'Lack of skull and forelimbs sharply limits feeding and functional claims.', uncertainties: ['Only one incomplete individual is known.', 'Its position within early Alvarezsauria varies.'],
      sources: [src('comparative-anatomy', 'Meso et al. (2021), Tail anatomy of the Alvarezsauria and its functional and behavioural implications', 'https://doi.org/10.1016/j.cretres.2021.104830'), nhm('alvarezsaurus')]
    }),
    amargasaurus: review({
      period: 'Early Cretaceous', mya: 'about 130-120 million years ago', taxonomy: sauropod('Neosauropoda', 'Diplodocoidea', 'Dicraeosauridae'), score: 82, massKg: null,
      description: 'Amargasaurus cazaui was a dicraeosaurid sauropod from the La Amarga Formation of Argentina. One partial skeleton preserves much of the vertebral column, including paired, extremely tall cervical neural spines, plus skull and limb elements.',
      facts: ['The holotype is relatively complete for a dicraeosaurid but is not a full articulated skeleton.', 'The neural spines supported soft tissue, but competing sail, sheath and display reconstructions are not decisively resolved.'],
      age: 'The Puesto Antigual Member of the La Amarga Formation is Barremian-early Aptian.', material: 'One relatively complete partial skeleton with fragmentary skull and much of the axial column.', formations: ['La Amarga Formation'],
      limit: 'Core anatomy is strong for one individual; external appearance and exact size remain uncertain.', uncertainties: ['Only one principal skeleton is known.', 'The soft-tissue covering and function of the neck spines are unknown.'],
      sources: [src('spine-histology', 'Cerda et al. (2022), Osteohistology and palaeobiological implications of the neural spines of Amargasaurus', 'https://doi.org/10.1111/joa.13659'), src('comparative-context', 'Gallina et al. (2019), A new long-spined dinosaur and the diversity of dicraeosaurids', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6362061/'), nhm('amargasaurus')]
    }),
    anchiceratops: review({
      period: 'Late Cretaceous', mya: 'about 72-69 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Ceratopsidae', 'Chasmosaurinae'), score: 78,
      description: 'Anchiceratops ornatus was a chasmosaurine ceratopsid from the Horseshoe Canyon Formation of Alberta. Multiple skulls and some partial skeletons document a short, ornamented frill, but proposed additional species and sexual differences are not securely supported.',
      facts: ['The genus is represented by numerous skulls with variable frill shape.', 'Variation may reflect age, individual differences or stratigraphy rather than separate sexes.'],
      age: 'Most diagnostic material is upper Campanian to lower Maastrichtian within the Horseshoe Canyon Formation.', material: 'Multiple skulls and partial postcranial skeletons.', formations: ['Horseshoe Canyon Formation'],
      limit: 'Cranial anatomy is well sampled; whole-body proportions and causes of variation are less certain.', uncertainties: ['The interpretation of skull variation remains debated.', 'Some referred material lacks precise stratigraphic control.'],
      sources: [src('systematic-revision', 'Mallon et al. (2011), Variation and sexual dimorphism in the chasmosaurine ceratopsid Anchiceratops', 'https://doi.org/10.1080/02724634.2011.601484'), nhm('anchiceratops')]
    }),
    anchiornis: review({
      period: 'Late Jurassic', mya: 'about 161 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Paraves', 'Anchiornithidae'), score: 94,
      locomotion: 'bipedal; aerial capability debated',
      description: 'Anchiornis huxleyi was a small feathered paravian from the Oxfordian Tiaojishan Formation of northeastern China. Hundreds of articulated specimens preserve bones and extensive plumage, including long feathers on all four limbs.',
      facts: ['Exceptional soft-tissue preservation supports detailed plumage descriptions.', 'Published colour reconstructions infer melanosome-based colours, but individual and body-region sampling limit how universal a single reconstruction is.'],
      age: 'Radiometric work places the relevant Tiaojishan beds near 160.9-160.3 million years ago.', material: 'Hundreds of articulated skeletons, many with feather impressions.', formations: ['Tiaojishan Formation'],
      limit: 'Anatomy and plumage are very well supported; aerodynamics and exact colour pattern remain interpretive.', uncertainties: ['Its exact position among early paravians varies.', 'Flight capability and colour reconstruction are model-dependent.'],
      sources: [src('integument-and-colour', 'Li et al. (2010), Plumage color patterns of an extinct dinosaur', 'https://doi.org/10.1126/science.1186290'), src('specimen-review', 'Pei et al. (2017), New specimens of Anchiornis huxleyi', 'https://doi.org/10.1206/0003-0090-411.1.1'), nhm('anchiornis')]
    }),
    anchisaurus: review({
      period: 'Early Jurassic', mya: 'about 201-190 million years ago', taxonomy: sauropodomorph('Anchisauria'), score: 76,
      description: 'Anchisaurus polyzelus was a small early sauropodomorph from the Portland Formation of Connecticut and Massachusetts. Its anatomy is based on several incomplete skeletons, including the neotype YPM 1883; Ammosaurus is a junior synonym.',
      facts: ['The accepted species spelling is polyzelus, not polyzelous.', 'The Manchester quarry material formerly named Ammosaurus major belongs to Anchisaurus in the modern revision.'],
      age: 'The Portland Formation material is Early Jurassic, broadly Hettangian-Sinemurian.', material: 'Several incomplete skeletons, one substantially complete and designated as neotype.', formations: ['Portland Formation'],
      limit: 'General anatomy is sound, but its precise mass and stance depend on reconstruction.', uncertainties: ['Its exact phylogenetic position near Sauropoda varies.', 'Some historical referrals require renewed comparison.'],
      sources: [src('systematic-revision', 'Yates (2010), Revision of the Manchester sauropodomorphs and status of Anchisaurus', 'https://doi.org/10.1111/j.1475-4983.2010.00952.x'), src('nomenclatural-ruling', 'ICZN (2015), Opinion 2361: Anchisaurus polyzelus conserved by neotype designation', 'https://www.biotaxa.org/bzn/article/view/37953'), nhm('anchisaurus')]
    }),
    ankylosaurus: review({
      period: 'Late Cretaceous', mya: 'about 68-66 million years ago', taxonomy: ornithischian('Thyreophora', 'Ankylosauria', 'Ankylosauridae', 'Ankylosaurinae'), score: 72,
      description: 'Ankylosaurus magniventris was a very large ankylosaurid from latest Cretaceous rocks of western North America. Several incomplete skeletons and skulls collectively document its broad body, armour and tail club, but no single complete skeleton is known.',
      facts: ['The tail club is known from referred material and was capable of powerful lateral motion.', 'Much familiar full-body restoration combines non-overlapping specimens and comparison with relatives.'],
      age: 'Secure specimens are late Maastrichtian, principally from the Hell Creek, Lance and Scollard formations.', material: 'Several incomplete skulls and skeletons with complementary armour and tail material.', formations: ['Hell Creek Formation', 'Lance Formation', 'Scollard Formation'],
      limit: 'Composite anatomy is strong, but total body mass and exact armour arrangement are not directly preserved in one individual.', uncertainties: ['No complete articulated skeleton is known.', 'Exact armour placement and maximum size remain estimates.'],
      sources: [src('systematic-revision', 'Arbour & Mallon (2017), Unusual cranial and postcranial anatomy of Ankylosaurus magniventris', 'https://doi.org/10.1139/facets-2017-0063'), nhm('ankylosaurus')]
    }),
    anserimimus: review({
      period: 'Late Cretaceous', mya: 'about 72-66 million years ago', taxonomy: theropod('Coelurosauria', 'Ornithomimosauria', 'Ornithomimidae'), score: 55,
      diet: 'diet uncertain; omnivory or herbivory plausible',
      description: 'Anserimimus planinychus was an ornithomimid from the Maastrichtian Nemegt Formation of Mongolia. Its type is an incomplete skeleton with a distinctive, robust forelimb; no complete skull is securely known.',
      facts: ['The broad hand bones inspired the species name but do not reveal a specific feeding behaviour.', 'A bipedal, cursorial body plan is supported by ornithomimid anatomy; exact diet is uncertain.'],
      age: 'The type locality is in the Maastrichtian Nemegt Formation.', material: 'One incomplete postcranial skeleton, with limited additional referred material.', formations: ['Nemegt Formation'],
      limit: 'Lack of a complete skull and limited sample restrict diet, size and variation claims.', uncertainties: ['Only one diagnostic partial skeleton is securely established.', 'Some referred material is not fully described.'],
      sources: [src('comparative-description', 'Kobayashi & Barsbold (2006), Ornithomimids from the Nemegt Formation of Mongolia', 'https://artscimedia.case.edu/wp-content/uploads/sites/108/2017/05/17211204/JPSK-2006-Kobayashi-Barsbold-ornithomimids-from-nemegt-Fm-LK-MONG.pdf'), nhm('anserimimus')]
    }),
    antarctosaurus: review({
      period: 'Late Cretaceous', mya: 'about 83-78 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Titanosauria'), score: 35, length: null,
      taxonomicStatus: 'validity disputed because the fragmentary type assemblage may not be a single individual',
      description: 'Antarctosaurus wichmannianus was a titanosaur from the Anacleto Formation of Patagonia. Its holotype is a disarticulated collection of cranial and postcranial bones whose association is uncertain, so it cannot support a confident complete-body reconstruction.',
      facts: ['The type includes braincase, jaw, vertebral and limb elements found in association but not articulation.', 'Other species historically placed in Antarctosaurus are not automatically part of A. wichmannianus and several have been reassigned or regarded as dubious.'],
      age: 'The Anacleto Formation is early Campanian.', material: 'A disarticulated, fragmentary type assemblage with uncertain element association.', formations: ['Anacleto Formation'],
      limit: 'Association problems and missing anatomy make body size and proportions highly uncertain.', uncertainties: ['The holotype may combine more than one individual.', 'The genus-level diagnosis and phylogenetic position require revision.', 'Historical species referrals are heterogeneous.'],
      sources: [src('comparative-revision', 'Gallina & Apesteguia (2011), Cranial anatomy and phylogenetic position of Bonitasaura, with comments on Antarctosaurus', 'https://doi.org/10.4202/app.2010.0011'), nhm('antarctosaurus')]
    }),
    apatosaurus: review({
      period: 'Late Jurassic', mya: 'about 154-150 million years ago', taxonomy: sauropod('Neosauropoda', 'Diplodocoidea', 'Diplodocidae', 'Apatosaurinae'), score: 88,
      description: 'Apatosaurus was a robust diplodocid sauropod from the Morrison Formation of western North America. Multiple partial skeletons document most of the body, but skulls are rare and species-level referrals have been repeatedly revised.',
      facts: ['A. ajax is the type species; A. louisae is also widely accepted.', 'Brontosaurus was synonymised with Apatosaurus for much of the twentieth century, but a 2015 specimen-level analysis revived it as a separate genus; that result is influential but still tested in later work.'],
      age: 'Diagnostic material is Kimmeridgian-Tithonian within the Morrison Formation.', material: 'Multiple complementary partial skeletons and a small number of associated skulls.', formations: ['Morrison Formation'],
      limit: 'The composite skeleton is well known, while species boundaries and maximum mass remain analysis-dependent.', uncertainties: ['Species and genus boundaries among apatosaurines remain debated.', 'Some historical skull and skeleton associations are uncertain.'],
      sources: [src('specimen-level-revision', 'Tschopp, Mateus & Benson (2015), A specimen-level phylogenetic analysis and taxonomic revision of Diplodocidae', 'https://doi.org/10.7717/peerj.857'), nhm('apatosaurus')]
    }),
    aquilops: review({
      period: 'Early Cretaceous', mya: 'about 109-104 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Neoceratopsia'), score: 38, length: null, massKg: null,
      description: 'Aquilops americanus was a small early neoceratopsian from the Cloverly Formation of Montana. It is known from one partial skull, important for ceratopsian biogeography but insufficient for a detailed full-body reconstruction.',
      facts: ['The hooked rostral bone and associated skull elements diagnose the genus.', 'Body size and posture are inferred from relatives because no postcranial bones are known.'],
      age: 'The relevant Cloverly beds are late Aptian to early Albian.', material: 'One partial skull.', formations: ['Cloverly Formation'],
      limit: 'A skull-only juvenile or subadult specimen cannot establish adult body size or postcranial anatomy.', uncertainties: ['Only one partial skull is known.', 'The individual was not fully mature.', 'Its exact position among early neoceratopsians is weakly resolved.'],
      sources: [src('original-description', 'Farke et al. (2014), A ceratopsian dinosaur from the Lower Cretaceous of western North America', 'https://doi.org/10.1371/journal.pone.0112055'), nhm('aquilops')]
    }),
    aragosaurus: review({
      period: 'Late Jurassic-Early Cretaceous', mya: 'about 145-140 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Titanosauriformes'), score: 52,
      description: 'Aragosaurus ischiaticus was an early titanosauriform sauropod from the Villar del Arzobispo Formation of Spain, close to the Jurassic-Cretaceous boundary. Its holotype is an associated but incomplete postcranial skeleton, not an Early Cretaceous animal securely dated to 130-120 million years ago.',
      facts: ['The known skeleton includes vertebrae and limb-girdle elements but no skull.', 'Revised stratigraphy moved the type locality from a traditional Barremian assignment to the Tithonian-Berriasian interval.'],
      age: 'The type locality is now placed in the Tithonian-Berriasian Villar del Arzobispo Formation.', material: 'One associated incomplete postcranial skeleton.', formations: ['Villar del Arzobispo Formation'],
      limit: 'No skull and limited overlapping individuals constrain diagnosis and size estimates.', uncertainties: ['The type locality is not directly radiometrically dated.', 'Its exact position within early Titanosauriformes varies.'],
      sources: [src('systematic-revision', 'Royo-Torres et al. (2014), The anatomy and phylogenetic relationships of Aragosaurus ischiaticus', 'https://doi.org/10.1111/zoj.12144'), src('stratigraphic-reassessment', 'Canudo et al. (2012), New information about the stratigraphic position and age of Aragosaurus', 'https://doi.org/10.1017/S0016756811000732'), nhm('aragosaurus')]
    }),
    aralosaurus: review({
      period: 'Late Cretaceous', mya: 'approximately 86-83 million years ago', taxonomy: ornithischian('Cerapoda', 'Ornithopoda', 'Hadrosauridae', 'Lambeosaurinae', 'Aralosaurini'), score: 42, length: null,
      description: 'Aralosaurus tuberiferus was a lambeosaurine hadrosaurid from the Bostobe Formation of Kazakhstan. It is based mainly on a fragmentary posterior skull and jaws; the rest of its body is poorly documented.',
      facts: ['Modern revision identified a hollow-crested lambeosaurine affinity from the preserved skull anatomy.', 'A complete crest, skeleton and precise body dimensions are not known.'],
      age: 'The Bostobe Formation is generally Santonian to early Campanian, but the type horizon is not narrowly dated.', material: 'One fragmentary skull with jaws and limited referred cranial material.', formations: ['Bostobe Formation'],
      limit: 'Fragmentary cranial material cannot support exact body size or a complete crest reconstruction.', uncertainties: ['The formation age is broad.', 'Its detailed relationship to Canardia and other aralosaurins remains analysis-dependent.'],
      sources: [src('systematic-revision', 'Godefroit, Alifanov & Bolotsky (2004), A re-appraisal of Aralosaurus tuberiferus', 'https://biblio.naturalsciences.be/rbins-publications/bulletin-of-the-royal-belgian-institute-of-natural-sciences-earth-sciences/74-sup-2004/irscnb_p4087_022b9dx_74-2_bulletin-10.pdf'), src('phylogenetic-context', 'Prieto-Marquez et al. (2013), Canardia and the European origin of Aralosaurini', 'https://doi.org/10.1371/journal.pone.0069835'), nhm('aralosaurus')]
    }),
    archaeoceratops: review({
      period: 'Early Cretaceous', mya: 'approximately 125-100 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Neoceratopsia'), score: 72,
      description: 'Archaeoceratops was a small early neoceratopsian from the Xinminpu Group of Gansu, China. Several partial skulls and skeletons represent two named species and document a largely bipedal animal without the elaborate horns of later ceratopsids.',
      facts: ['A. oshimai is represented by multiple partial individuals; A. yujingziensis is a second species described from the same regional unit.', 'Broad herbivory is supported by dental anatomy, but exact diet and social behaviour are unknown.'],
      age: 'The Xinminpu Group localities are Aptian-Albian but their individual horizons are not all dated precisely.', material: 'Several partial skulls and postcranial skeletons.', formations: ['Xinminpu Group'],
      limit: 'Multiple individuals support general anatomy; adult size and species differences remain incompletely sampled.', uncertainties: ['Local stratigraphic ages are broad.', 'Basal neoceratopsian relationships vary among analyses.'],
      sources: [src('anatomical-redescription', 'You & Dodson (2003), Redescription of neoceratopsian Archaeoceratops and its phylogenetic position', 'https://app.pan.pl/archive/published/app48/app48-261.pdf'), src('cranial-osteology', 'Wang et al. (2025), Cranial osteology of Archaeoceratops oshimai and phylogenetic evaluation of basal Ceratopsia', 'https://doi.org/10.1080/08912963.2025.2568096'), nhm('archaeoceratops')]
    }),
    archaeopteryx: review({
      period: 'Late Jurassic', mya: 'about 151-148 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Avialae', 'Archaeopterygidae'), score: 96,
      locomotion: 'bipedal; capable of active flight, exact flight style debated',
      description: 'Archaeopteryx was a feathered early avialan from the Solnhofen Archipelago limestones of Germany. More than a dozen skeletal specimens, many with flight-feather impressions, document a mosaic of avian and non-avian theropod features.',
      facts: ['Asymmetrical wing feathers support aerodynamic function, while flight style remains debated.', 'The number and limits of Archaeopteryx species are contested; not every specimen is necessarily conspecific.'],
      age: 'The principal Solnhofen and Altmuehltal specimens are late Kimmeridgian to early Tithonian.', material: 'More than a dozen partial to nearly complete slab skeletons, many preserving feathers.', formations: ['Solnhofen Limestone', 'Altmuehltal Formation'],
      limit: 'Anatomy and plumage are exceptionally documented, but taxonomy and flight performance remain unsettled.', uncertainties: ['Species-level taxonomy is actively debated.', 'Powered-flight ability and ecology depend on biomechanical interpretation.'],
      sources: [src('specimen-description', 'Rauhut, Foth & Tischlinger (2018), The oldest Archaeopteryx and a tooth-bearing avialan diversity', 'https://doi.org/10.7717/peerj.4191'), src('flight-biomechanics', 'Voeten et al. (2018), Wing bone geometry reveals active flight in Archaeopteryx', 'https://doi.org/10.1038/s41467-018-03296-8'), nhm('archaeopteryx')]
    }),
    archaeornithomimus: review({
      period: 'Late Cretaceous', mya: 'approximately 96-83 million years ago', taxonomy: theropod('Coelurosauria', 'Ornithomimosauria', 'Ornithomimidae'), score: 50,
      diet: 'diet uncertain; omnivory or herbivory plausible',
      description: 'Archaeornithomimus asiaticus was an ornithomimid from the Iren Dabasu Formation of Inner Mongolia. It is known from disarticulated bones of several individuals; Uzbek material formerly called A. bissektensis is now placed in the separate genus Dzharacursor.',
      facts: ['The type assemblage contains mainly postcranial bones rather than a complete individual.', 'A toothless, cursorial ornithomimid body is supported, but diet is not directly known.'],
      age: 'The Iren Dabasu type horizon has a broad debated Late Cretaceous age; the younger Uzbek species should not extend the range.', material: 'Disarticulated postcranial bones from several individuals.', formations: ['Iren Dabasu Formation'],
      limit: 'Mixed, disarticulated remains and poor cranial evidence limit body-size and feeding claims.', uncertainties: ['The Iren Dabasu age is imprecise.', 'The type assemblage requires modern comprehensive revision.'],
      sources: [src('referred-material-revision', 'Sues & Averianov (2016), Ornithomimosauria from the Upper Cretaceous of Uzbekistan', 'https://doi.org/10.1016/j.cretres.2015.07.012'), src('recent-taxonomic-revision', 'Averianov & Sues (2025), A new ornithomimid theropod from the Bissekty Formation of Uzbekistan', 'https://doi.org/10.1080/02724634.2024.2433759'), nhm('archaeornithomimus')]
    }),
    argentinosaurus: review({
      period: 'Late Cretaceous', mya: 'about 96-93 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Titanosauria', 'Colossosauria'), score: 45, length: null, massKg: null,
      description: 'Argentinosaurus huinculensis was a giant titanosaur from the Huincul Formation of Patagonia. Despite its fame, it is known from a small set of enormous vertebrae, ribs and limb-girdle elements; precise maximum length and mass are highly extrapolative.',
      facts: ['The holotype includes several dorsal vertebrae, part of the sacrum, an anterior caudal, ribs and a right tibia.', 'A giant femoral shaft often discussed with it is not securely associated with the holotype.'],
      age: 'The lower Huincul Formation is late Cenomanian to early Turonian.', material: 'One very incomplete giant postcranial skeleton; some referred giant bones are uncertain.', formations: ['Huincul Formation'],
      limit: 'Extreme incompleteness makes length and especially mass estimates model-dependent.', uncertainties: ['No skull or complete limb is known.', 'Some referred elements may not belong to the genus.', 'Its exact titanosaurian position varies.'],
      sources: [src('biomechanical-reconstruction', 'Sellers et al. (2013), March of the titans: locomotor capabilities of Argentinosaurus', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3864407/'), src('giant-sauropod-review', 'Carballido et al. (2023), A new giant titanosaur and the evolution of gigantism', 'https://www.app.pan.pl/archive/published/app68/app010862023.pdf'), nhm('argentinosaurus')]
    }),
    arrhinoceratops: review({
      period: 'Late Cretaceous', mya: 'about 71-69 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Ceratopsidae', 'Chasmosaurinae'), score: 54,
      description: 'Arrhinoceratops brachyops was a chasmosaurine ceratopsid from the Horseshoe Canyon Formation of Alberta. It is known chiefly from a large, nearly complete but crushed skull; postcranial anatomy is poorly established.',
      facts: ['The name, meaning no nose horn, is misleading because a nasal horn core is present.', 'A juvenile skull adds growth information, but whole-body reconstructions rely on related ceratopsids.'],
      age: 'The diagnostic material is lower Maastrichtian within the Horseshoe Canyon Formation.', material: 'One principal near-complete skull and a small amount of additional cranial material.', formations: ['Horseshoe Canyon Formation'],
      limit: 'Cranial anatomy is moderately supported; body size and postcranial anatomy are inferred.', uncertainties: ['Very little diagnostic postcranial material is known.', 'Distortion complicates details of the holotype skull.'],
      sources: [src('systematic-revision', 'Mallon et al. (2015), The chasmosaurine ceratopsid Arrhinoceratops brachyops', 'https://doi.org/10.1111/zoj.12294'), src('historical-description', 'Gilmore (1946), Reptilian fauna of the North Horn Formation and review of Arrhinoceratops', 'https://pubs.usgs.gov/pp/0210a/report.pdf'), nhm('arrhinoceratops')]
    }),
    atlascopcosaurus: review({
      period: 'Early Cretaceous', mya: 'approximately 115-100 million years ago', taxonomy: ornithischian('Cerapoda', 'Ornithopoda', 'Elasmaria'), score: 28, length: null,
      description: 'Atlascopcosaurus loadsi was a small ornithopod from the Albian Eumeralla Formation of Victoria, Australia. It is based on a partial upper jaw and isolated jaw and tooth material, so nearly all postcranial and body-size details are inferred.',
      facts: ['The holotype is a partial maxilla with teeth.', 'Modern Australian reviews retain it provisionally as valid while recognising weak phylogenetic resolution.'],
      age: 'The Eumeralla Formation material is Albian rather than spanning most of the Early Cretaceous.', material: 'A partial maxilla plus isolated dentaries and teeth.', formations: ['Eumeralla Formation'],
      limit: 'Jaw fragments cannot support a precise total length, mass or locomotor profile.', uncertainties: ['The diagnosis relies on limited dental characters.', 'Its exact position within Gondwanan ornithopods is unresolved.'],
      sources: [src('continental-review', 'Poropat et al. (2023), An annotated checklist of Australian Mesozoic tetrapods', 'https://doi.org/10.1080/03115518.2023.2228367'), nhm('atlascopcosaurus')]
    }),
    atrociraptor: review({
      period: 'Late Cretaceous', mya: 'about 72-69 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Dromaeosauridae'), score: 34, length: null,
      description: 'Atrociraptor marshalli was a small dromaeosaurid from the lower Horseshoe Canyon Formation of Alberta. The holotype consists of a partial snout, jaws and teeth; isolated teeth referred later do not provide a complete skeleton.',
      facts: ['The short, deep snout is reconstructed from incomplete and somewhat distorted cranial material.', 'Bipedal locomotion and carnivory are secure at broad level, but precise prey and hunting behaviour are unknown.'],
      age: 'The type comes from the early Maastrichtian lower Horseshoe Canyon Formation.', material: 'One partial skull and jaws with teeth; isolated referred teeth.', formations: ['lower Horseshoe Canyon Formation'],
      limit: 'Skull fragments alone cannot fix full-body dimensions or detailed ecology.', uncertainties: ['Only one diagnostic partial skull is established.', 'Its position within Dromaeosauridae varies among recent analyses.'],
      sources: [src('original-description', 'Currie & Varricchio (2004), A new dromaeosaurid from the Horseshoe Canyon Formation of Alberta', 'https://www.researchgate.net/publication/40662065_A_new_dromaeosaurid_from_the_Horseshoe_Canyon_Formation_Upper_Cretaceous_of_Alberta_Canada'), src('phylogenetic-review', 'Powers et al. (2022), A new hypothesis of eudromaeosaurian evolution', 'https://doi.org/10.1080/02724634.2021.2010087'), nhm('atrociraptor')]
    }),
    aucasaurus: review({
      period: 'Late Cretaceous', mya: 'about 83-78 million years ago', taxonomy: theropod('Ceratosauria', 'Abelisauridae', 'Carnotaurinae'), score: 91,
      description: 'Aucasaurus garridoi was an abelisaurid theropod from the Anacleto Formation of Patagonia. Its single holotype preserves a nearly complete skull and much of the articulated skeleton, making it one of the anatomically best known abelisaurids.',
      facts: ['The forelimbs are extremely reduced and anatomically specialised.', 'Damage around the skull has inspired death-scenario proposals, but the cause is not established.'],
      age: 'The Anacleto Formation is early Campanian.', material: 'One nearly complete, partly articulated skull and skeleton.', formations: ['Anacleto Formation'],
      limit: 'One excellent individual documents anatomy but cannot establish population variation or maximum size.', uncertainties: ['Only one principal individual is known.', 'The cause of cranial damage and details of soft tissue are unknown.'],
      sources: [src('axial-anatomy', 'Baiano et al. (2023), Axial skeleton of Aucasaurus garridoi', 'https://doi.org/10.7717/peerj.16236'), src('endocranial-anatomy', 'Paulina-Carabajal & Succar (2015), The endocranial morphology and inner ear of Aucasaurus', 'https://www.app.pan.pl/article/item/app20130037.html'), nhm('aucasaurus')]
    }),
    austrosaurus: review({
      period: 'Early Cretaceous', mya: 'about 105-100 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Somphospondyli'), score: 30, length: null,
      description: 'Austrosaurus mckillopi was a somphospondylan sauropod from the upper Albian Allaru Mudstone of Queensland, Australia. The type is a short series of vertebrae with ribs; many later referrals cannot be assumed to belong to it.',
      facts: ['The holotype comprises six presacral vertebrae and associated ribs.', 'Modern reassessment places it near, but not securely within, Titanosauria.'],
      age: 'The Allaru Mudstone type horizon is late Albian.', material: 'Six presacral vertebrae and associated ribs.', formations: ['Allaru Mudstone'],
      limit: 'Axial fragments provide almost no direct evidence for whole-body size, skull or limbs.', uncertainties: ['The taxon is very incomplete.', 'Historical referred material is not securely attributable.', 'Its precise somphospondylan position varies.'],
      sources: [src('systematic-revision', 'Poropat et al. (2017), Reappraisal of Austrosaurus mckillopi', 'https://doi.org/10.1080/03115518.2017.1334826'), src('continental-review', 'Poropat et al. (2023), An annotated checklist of Australian Mesozoic tetrapods', 'https://doi.org/10.1080/03115518.2023.2228367'), nhm('austrosaurus')]
    }),
    avaceratops: review({
      period: 'Late Cretaceous', mya: 'about 78-76 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Ceratopsidae', 'Centrosaurinae'), score: 56,
      description: 'Avaceratops lammersi was a small centrosaurine ceratopsid from the Judith River Formation of Montana. Its holotype is a partial skull and skeleton of an immature individual; additional skulls have been referred, but their assignment and adult morphology remain debated.',
      facts: ['The holotype is not a complete adult skeleton.', 'Its short frill lacks the elaborate ornament of many centrosaurines, although ontogeny complicates comparison.'],
      age: 'The type locality is late Campanian in the Judith River Formation.', material: 'One partial juvenile skull and skeleton plus debated referred skull material.', formations: ['Judith River Formation'],
      limit: 'Immaturity and uncertain referrals prevent a secure adult size or ornament reconstruction.', uncertainties: ['The holotype is immature.', 'The referral of larger skulls and the genus\'s phylogenetic position remain debated.'],
      sources: [src('original-description', 'Dodson (1986), Avaceratops lammersi, a new ceratopsid from the Judith River Formation', 'https://www.jstor.org/stable/4064910'), src('phylogenetic-context', 'Sampson et al. (2013), A remarkable short-snouted horned dinosaur from southern Laramidia', 'https://doi.org/10.1098/rspb.2013.1186'), nhm('avaceratops')]
    }),
    avimimus: review({
      period: 'Late Cretaceous', mya: 'about 72-66 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Oviraptorosauria', 'Avimimidae'), score: 70,
      description: 'Avimimus portentosus was a small, long-legged oviraptorosaur from the Maastrichtian Nemegt Formation of Mongolia. It is represented by several partial skeletons, while a separate species, A. nemegtensis, is known from an older bonebed.',
      facts: ['The type species combines toothless jaws, a fused hand and cursorial hind limbs.', 'Feathering is strongly expected from its oviraptorosaur relationships, but detailed plumage is not directly preserved in the principal specimens.'],
      age: 'A. portentosus is from the Maastrichtian Nemegt Formation; A. nemegtensis should be treated separately.', material: 'Several incomplete cranial and postcranial skeletons.', formations: ['Nemegt Formation'],
      limit: 'Complementary specimens support the body plan, but species assignment and soft tissues remain uncertain.', uncertainties: ['Some historical referrals may belong to A. nemegtensis.', 'Diet and plumage details are inferred rather than directly preserved.'],
      sources: [src('cranial-anatomy', 'Tsuihiji et al. (2017), New information on the cranial morphology of Avimimus', 'https://doi.org/10.1080/02724634.2017.1347177'), src('bonebed-study', 'Funston et al. (2016), The first oviraptorosaur bonebed', 'https://doi.org/10.1038/srep35782'), nhm('avimimus')]
    }),
    bactrosaurus: review({
      period: 'Late Cretaceous', mya: 'approximately 96-83 million years ago', taxonomy: ornithischian('Cerapoda', 'Ornithopoda', 'Hadrosauroidea'), score: 72,
      description: 'Bactrosaurus johnsoni was a non-hadrosaurid hadrosauroid from the Iren Dabasu Formation of Inner Mongolia. It is represented by disarticulated cranial and postcranial bones from numerous individuals, not by a single nearly complete skeleton.',
      facts: ['At least a dozen individuals are represented at the principal locality.', 'Its broad herbivorous and primarily bipedal-to-facultatively quadrupedal interpretation is based on hadrosauroid anatomy; exact gait and diet are not directly observed.'],
      age: 'The Iren Dabasu Formation has a debated broad Late Cretaceous age, probably within the Cenomanian-Campanian interval.', material: 'Disarticulated skull and skeleton elements from at least twelve individuals.', formations: ['Iren Dabasu Formation'],
      limit: 'Many individuals provide anatomical coverage, but disarticulation complicates association and size reconstruction.', uncertainties: ['The formation age is imprecise.', 'Some historical referrals and named species are not secure.', 'Its position close to Hadrosauridae varies.'],
      sources: [src('anatomical-revision', 'Godefroit et al. (2011), Osteology and relationships of Bactrosaurus johnsoni', 'https://doi.org/10.1111/j.1475-4983.2011.01053.x'), nhm('bactrosaurus')]
    }),
    bagaceratops: review({
      period: 'Late Cretaceous', mya: 'approximately 84-72 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Neoceratopsia', 'Bagaceratopsidae'), score: 83,
      description: 'Bagaceratops rozhdestvenskyi was a small neoceratopsian from the Campanian Barun Goyot Formation of Mongolia. Numerous skulls and some postcranial skeletons document its short face, small frill and incipient nasal ornament.',
      facts: ['Multiple growth stages are known, making the skull better sampled than those of many early ceratopsians.', 'Several genera named from similar Mongolian skulls have been proposed as synonyms of Bagaceratops, but taxonomic boundaries still require specimen-level care.'],
      age: 'The Barun Goyot Formation is Campanian, but lacks a narrow universally agreed numerical range.', material: 'Numerous skulls and partial postcranial skeletons from multiple growth stages.', formations: ['Barun Goyot Formation'],
      limit: 'Cranial anatomy is strong; exact species synonymy, adult mass and behaviour are less certain.', uncertainties: ['Synonymy of Gobiceratops, Lamaceratops, Platyceratops and Magnirostris is influential but not universally adopted.', 'Formation age is broad.'],
      sources: [src('systematic-review', 'Sereno (2000), The fossil record, systematics and evolution of pachycephalosaurs and ceratopsians', 'https://d3qi0qp55mx5f5.cloudfront.net/paulsereno/i/docs/00-Marginocephalia.pdf'), src('taxonomic-revision', 'Czepinski (2020), Ontogeny and variation of Bagaceratops and other bagaceratopsids', 'https://doi.org/10.1080/08912963.2019.1593404'), nhm('bagaceratops')]
    }),
    bambiraptor: review({
      status: 'needs-specialist-review', period: 'Late Cretaceous', mya: 'about 75-72 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Dromaeosauridae'), score: 52, length: null,
      taxonomicStatus: 'provisionally valid; distinction from juvenile Saurornitholestes requires specialist reassessment',
      description: 'Bambiraptor feinbergi is the accepted original spelling for a small dromaeosaurid from the upper Two Medicine Formation of Montana. The holotype, AMNH FR 30556, is a largely complete, partially articulated juvenile skeleton. Duplicate elements belong to a separate paratype assemblage representing at least two larger individuals and do not make the holotype a mixed specimen.',
      facts: ['The species was originally named feinbergi; the later spelling feinbergorum is not a mandatory correction.', 'The holotype and multi-individual paratype assemblage must be kept distinct.', 'Adult size, proportions and ecology cannot be derived securely from the juvenile holotype.'],
      age: 'The holotype comes from the late Campanian upper Two Medicine Formation.', material: 'A largely complete, partially articulated juvenile holotype (AMNH FR 30556), plus a separate paratype assemblage containing duplicate elements from at least two larger individuals.', formations: ['upper Two Medicine Formation'],
      limit: 'The holotype is anatomically informative but immature; adult size and taxonomic distinction from other small dromaeosaurids remain uncertain.', uncertainties: ['The paratype combines at least two larger individuals and cannot define one adult skeleton.', 'The holotype may represent a juvenile of another dromaeosaurid.', 'A modern monographic redescription is needed.'],
      sources: [src('original-description', 'Burnham et al. (2000), Remarkable new birdlike dinosaur from the Upper Cretaceous of Montana', 'https://kuscholarworks.ku.edu/bitstream/handle/1808/3761/Burnham_2000_LR.pdf'), src('comparative-dentition', 'Larson & Currie (2013), Multivariate analyses of small theropod dinosaur teeth and palaeoecological turnover', 'https://doi.org/10.1371/journal.pone.0054329'), nhm('bambiraptor')]
    }),
    barapasaurus: review({
      period: 'Early Jurassic', mya: 'about 199-184 million years ago', taxonomy: sauropod('Eusauropoda'), score: 78,
      description: 'Barapasaurus tagorei was an early sauropod from the lower Kota Formation of India. Roughly three hundred disarticulated bones represent at least six individuals and collectively document much of the postcranial skeleton, but the skull is known only from teeth and very limited elements.',
      facts: ['The quarry is a multi-individual assemblage, not one complete giant skeleton.', 'Its columnar limbs support obligate quadrupedal locomotion; precise feeding height and mass remain reconstructed.'],
      age: 'The lower Kota Formation is generally Sinemurian-Pliensbachian, although its upper boundary is not tightly dated.', material: 'About three hundred mostly disarticulated bones from at least six individuals.', formations: ['lower Kota Formation'],
      limit: 'Postcranial anatomy is well sampled collectively; skull, individual association and maximum size are poorly constrained.', uncertainties: ['The assemblage is disarticulated.', 'The formation age is not radiometrically narrow.', 'Its position around the base of Eusauropoda varies.'],
      sources: [src('systematic-revision', 'Bandyopadhyay et al. (2010), Osteology of Barapasaurus tagorei', 'https://doi.org/10.1111/j.1475-4983.2010.00933.x'), nhm('barapasaurus')]
    }),
    barosaurus: review({
      period: 'Late Jurassic', mya: 'about 155-149 million years ago', taxonomy: sauropod('Neosauropoda', 'Diplodocoidea', 'Diplodocidae', 'Diplodocinae'), score: 76,
      description: 'Barosaurus lentus was a long-necked diplodocid from the Morrison Formation of western North America. Several incomplete skeletons collectively document its elongated neck and relatively short tail compared with Diplodocus, but skull material is scarce and referrals need revision.',
      facts: ['The type specimen was founded on a series of tail vertebrae; better skeletons were referred later.', 'The famous rearing museum mount is a biomechanical reconstruction, not a preserved pose or directly observed behaviour.'],
      age: 'Secure material is Kimmeridgian-Tithonian within the Morrison Formation.', material: 'Several complementary partial skeletons, including adult and juvenile material; skull remains are very limited.', formations: ['Morrison Formation'],
      limit: 'Most of the postcranial plan is supported, but skull form, maximum size and rearing capacity remain uncertain.', uncertainties: ['Some referred specimens may not belong to the type species.', 'The largest reported cervical vertebrae have uncertain identification.'],
      sources: [src('authoritative-park-reference', 'US National Park Service, Barosaurus lentus', 'https://www.nps.gov/dino/learn/nature/barosaurus-lentus.htm'), src('diplodocid-revision', 'Tschopp, Mateus & Benson (2015), Specimen-level phylogeny and taxonomy of Diplodocidae', 'https://doi.org/10.7717/peerj.857'), nhm('barosaurus')]
    }),
    baryonyx: review({
      period: 'Early Cretaceous', mya: 'about 130-125 million years ago', taxonomy: theropod('Tetanurae', 'Megalosauroidea', 'Spinosauridae', 'Baryonychinae'), score: 87,
      description: 'Baryonyx walkeri was a baryonychine spinosaurid from the Barremian Weald Clay Formation of England. The holotype is a substantial partial skull and skeleton, and associated gut-region remains provide rare direct evidence of both fish and ornithopod consumption.',
      facts: ['The holotype includes much of the skull, vertebral column and limbs, including the enlarged first manual claw.', 'Fish scales and partly digested iguanodontian bones show a broad carnivorous diet, not exclusive fish-eating.'],
      age: 'The type locality is Barremian in the Weald Clay Formation.', material: 'One substantial partial skull and skeleton, supplemented by limited referred material.', formations: ['Weald Clay Formation'],
      limit: 'The holotype strongly supports anatomy and diet evidence; exact maximum size and behaviour remain estimates.', uncertainties: ['Some British and Iberian referrals are taxonomically uncertain.', 'The exact relationship to Suchomimus is debated but they are not established synonyms.'],
      sources: [src('original-description', 'Charig & Milner (1986), Baryonyx, a remarkable new theropod dinosaur', 'https://doi.org/10.1038/324359a0'), src('comparative-systematics', 'Barker et al. (2021), New spinosaurids from the Wessex Formation and European spinosaurid diversity', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8481559/'), src('authoritative-museum-review', 'Natural History Museum, How Baryonyx changed what we knew about spinosaurs', 'https://www.nhm.ac.uk/discover/how-did-baryonyx-change-what-we-knew-about-spinosaurs.html')]
    }),
    becklespinax: review({
      status: 'needs-specialist-review', period: 'Early Cretaceous', mya: 'about 140-133 million years ago', taxonomy: theropod('Tetanurae'), score: 18, length: null,
      taxonomicStatus: 'dubious name, commonly treated as a nomen dubium', acceptedName: false,
      description: 'Becklespinax altispinax is a historical name based on three tall-spined dorsal vertebrae from the Hastings Beds Group of England. The bones are too limited for a secure genus-level diagnosis or full-body reconstruction, and modern reviews generally regard the name as dubious.',
      facts: ['The name-bearing specimen NHMUK R1828 comprises three associated dorsal vertebrae.', 'The better-known name Altispinax dunkeri is also problematic and should not be used to supply a skull, limbs or a sail.'],
      age: 'The specimen is from the Valanginian Wadhurst Clay/Hastings Beds succession.', material: 'Three associated dorsal vertebrae.', formations: ['Wadhurst Clay Formation', 'Hastings Beds Group'],
      limit: 'Three vertebrae cannot support a confident body length, family assignment or external sail reconstruction.', uncertainties: ['The specimen may be indeterminate Tetanurae.', 'Diagnostic validity and correct nomenclature need specialist review.', 'The neural-spine soft tissue is unknown.'],
      sources: [src('systematic-revision', 'Carrano, Benson & Sampson (2012), The phylogeny of Tetanurae and status of fragmentary taxa', 'https://doi.org/10.1080/14772019.2011.630927'), src('vertebral-anatomy', 'Naish (2010), Pneumaticity, the early years: Wealden dinosaurs and saurischian pneumaticity', 'https://doi.org/10.1144/SP343.13'), nhm('becklespinax')]
    }),
    beipiaosaurus: review({
      period: 'Early Cretaceous', mya: 'about 125 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Therizinosauria'), score: 88,
      diet: 'diet uncertain; herbivory or omnivory plausible',
      description: 'Beipiaosaurus inexpectus was a feathered therizinosaur from the Yixian Formation of Liaoning, China. Several partial skeletons preserve extensive filamentous plumage and document a relatively basal member of the long-necked, large-gutted therizinosaur lineage.',
      facts: ['Both ordinary filamentous feathers and unusually long broad filaments are directly preserved.', 'Herbivory or omnivory is plausible from therizinosaur anatomy, but exact food items are not preserved.'],
      age: 'The Jianshangou beds of the Yixian Formation are early Aptian, close to 125 million years old.', material: 'Multiple partial skeletons, several with extensive feather impressions.', formations: ['Yixian Formation'],
      limit: 'Anatomy and plumage are well supported; adult size, colour and precise diet remain uncertain.', uncertainties: ['Not every specimen preserves the same anatomy.', 'The function of the elongated broad filaments is unknown.'],
      sources: [src('original-description', 'Xu, Tang & Wang (1999), A therizinosauroid dinosaur with integumentary structures from China', 'https://doi.org/10.1038/20670'), src('postcranial-revision', 'Liao et al. (2021), Postcranial osteology of Beipiaosaurus inexpectus', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8483305/'), nhm('beipiaosaurus')]
    }),
    bellusaurus: review({
      period: 'Middle Jurassic', mya: 'about 168-163 million years ago', taxonomy: sauropod('Eusauropoda', 'Neosauropoda'), score: 78, length: null,
      description: 'Bellusaurus sui was a small-bodied sauropod from the lower Shishugou Formation of Xinjiang, China. A bonebed preserves disarticulated remains of at least a dozen juveniles; adult anatomy and final body size are unknown.',
      facts: ['Cranial and postcranial remains provide broad coverage across the juvenile skeleton.', 'Its small size is primarily an ontogenetic feature and should not be presented as a known adult maximum.'],
      age: 'The lower Shishugou Formation is Middle Jurassic, usually Bathonian-Callovian.', material: 'A disarticulated bonebed of at least twelve juvenile individuals, including skull and postcrania.', formations: ['lower Shishugou Formation'],
      limit: 'Juvenile abundance documents early anatomy but not adult dimensions or mature character states.', uncertainties: ['No confirmed adult is known.', 'Ontogeny affects its phylogenetic placement.', 'The bonebed accumulation process is not fully resolved.'],
      sources: [src('cranial-revision', 'Moore et al. (2018), Cranial anatomy of Bellusaurus sui', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5985764/'), nhm('bellusaurus')]
    }),
    borogovia: review({
      period: 'Late Cretaceous', mya: 'about 72-66 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Troodontidae'), score: 28, length: null,
      description: 'Borogovia gracilicrus was a small troodontid theropod from the Maastrichtian Nemegt Formation of Mongolia. It is based on one fragmentary lower hind limb, so its skull, trunk, feathers and total body size are inferred from relatives.',
      facts: ['The distinctive foot lacks an enlarged predatory second-toe claw of the proportions seen in many other paravians.', 'Its name remains valid in recent troodontid analyses, but evidence is sparse.'],
      age: 'The type comes from the Maastrichtian Nemegt Formation.', material: 'One fragmentary distal hind limb and foot.', formations: ['Nemegt Formation'],
      limit: 'A single partial leg cannot establish skull anatomy, precise length, diet or plumage.', uncertainties: ['Only one fragmentary specimen is known.', 'Its exact troodontid relationships are weakly constrained.'],
      sources: [src('systematic-reassessment', 'Cau et al. (2021), The phylogenetic affinities of Borogovia and Gondwanan troodontids', 'https://doi.org/10.7717/peerj.12640'), nhm('borogovia')]
    }),
    brachiosaurus: review({
      period: 'Late Jurassic', mya: 'about 154-150 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Titanosauriformes', 'Brachiosauridae'), score: 66,
      description: 'Brachiosaurus altithorax was a brachiosaurid sauropod from the Morrison Formation of Colorado. Its holotype is a partial postcranial skeleton; the well-known African skeletons once called Brachiosaurus brancai belong to the separate genus Giraffatitan.',
      facts: ['No skull is confidently associated with B. altithorax.', 'Long forelimbs and a high shoulder are supported by the holotype, while many popular details derive from Giraffatitan and must not be transferred uncritically.'],
      age: 'The holotype is Kimmeridgian within the Morrison Formation.', material: 'One principal partial postcranial skeleton plus limited referred Morrison material.', formations: ['Morrison Formation'],
      limit: 'The basic postcranial build is supported; skull, neck completeness, maximum size and species variation are poorly constrained.', uncertainties: ['Few specimens are securely referable to B. altithorax.', 'African Giraffatitan material must be excluded.', 'Some North American referrals are debated.'],
      sources: [src('systematic-revision', 'Taylor (2009), A re-evaluation of Brachiosaurus altithorax and Giraffatitan brancai', 'https://doi.org/10.1671/039.029.0309'), src('nomenclatural-correction', 'Taylor (2011), The genus name Giraffatitan and a correction to Brachiosaurus', 'https://doi.org/10.1080/02724634.2011.557115'), nhm('brachiosaurus')]
    }),
    brachylophosaurus: review({
      period: 'Late Cretaceous', mya: 'about 78-76 million years ago', taxonomy: ornithischian('Cerapoda', 'Ornithopoda', 'Hadrosauridae', 'Saurolophinae'), score: 96,
      description: 'Brachylophosaurus canadensis was a flat-crested hadrosaurid from the Judith River Formation of Montana and Oldman Formation of Alberta. Numerous skulls and skeletons, including specimens with extensive skin impressions, make its anatomy and growth well documented.',
      facts: ['Several so-called mummies preserve scales and body outlines, not an intact living appearance.', 'Plant fragments in one body cavity are potentially gut contents, but contamination and taphonomic mixing limit fine dietary conclusions.'],
      age: 'Diagnostic occurrences are late Campanian, principally about 78-76 million years old.', material: 'Numerous skulls and skeletons, several nearly complete and preserving skin impressions.', formations: ['Judith River Formation', 'Oldman Formation'],
      limit: 'Anatomy is exceptionally supported; colour, behaviour and detailed diet remain uncertain.', uncertainties: ['Species-level referral of some material requires stratigraphic context.', 'Gut-content and molecular preservation claims need cautious interpretation.'],
      sources: [src('holotype-revision', 'Prieto-Marquez (2010), Global phylogeny of Hadrosauridae and cranial anatomy of Brachylophosaurus', 'https://doi.org/10.1111/j.1096-3642.2009.00617.x'), src('dietary-evidence', 'Tweet et al. (2008), Probable gut contents within a specimen of Brachylophosaurus canadensis', 'https://doi.org/10.2110/palo.2007.p07-044r'), nhm('brachylophosaurus')]
    }),
    brachytrachelopan: review({
      period: 'Late Jurassic', mya: 'approximately 160-145 million years ago', taxonomy: sauropod('Neosauropoda', 'Diplodocoidea', 'Dicraeosauridae'), score: 58,
      description: 'Brachytrachelopan mesai was a short-necked dicraeosaurid from the Canadon Calcareo Formation of Patagonia. It is known from one incomplete, partly articulated postcranial skeleton that preserves much of the neck and trunk but no skull.',
      facts: ['The unusually short cervical vertebrae directly support a proportionally short neck.', 'Selective low browsing is plausible, but exact feeding height and vegetation are not preserved.'],
      age: 'The Canadon Calcareo Formation is Late Jurassic, but its precise Oxfordian-Tithonian placement remains debated.', material: 'One incomplete, partly articulated postcranial skeleton without a skull.', formations: ['Canadon Calcareo Formation'],
      limit: 'The neck and trunk proportions are supported; head shape, full limb anatomy and body mass are uncertain.', uncertainties: ['Only one incomplete individual is known.', 'The formation age is broad.', 'Its exact relationships among dicraeosaurids vary.'],
      sources: [src('original-description', 'Rauhut et al. (2005), Discovery of a short-necked sauropod dinosaur from Patagonia', 'https://doi.org/10.1038/nature03623'), nhm('brachytrachelopan')]
    }),
    buitreraptor: review({
      period: 'Late Cretaceous', mya: 'about 99-94 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Dromaeosauridae', 'Unenlagiinae'), score: 91,
      description: 'Buitreraptor gonzalezorum was a small long-snouted unenlagiine dromaeosaurid from the Cenomanian Candeleros Formation of Patagonia. The holotype is a near-complete skeleton with a skull, and additional individuals clarify much of its postcranial anatomy.',
      facts: ['Its numerous small, unserrated teeth differ from the broad serrated teeth of many northern dromaeosaurids.', 'The teeth support small-prey feeding but do not identify a single specialised diet.'],
      age: 'The Candeleros Formation is Cenomanian.', material: 'One near-complete skull and skeleton plus several partial individuals.', formations: ['Candeleros Formation'],
      limit: 'Anatomy is strongly documented; feathers, exact body mass and feeding behaviour remain unpreserved or modelled.', uncertainties: ['Its exact position among unenlagiines and other paravians varies.', 'No direct feather impressions or gut contents are known.'],
      sources: [src('original-description', 'Makovicky et al. (2005), The earliest dromaeosaurid theropod from South America', 'https://doi.org/10.1038/nature03996'), src('postcranial-anatomy', 'Gianechini et al. (2018), Postcranial skeletal anatomy of Buitreraptor', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5875404/'), nhm('buitreraptor')]
    }),
    camarasaurus: review({
      period: 'Late Jurassic', mya: 'about 155-149 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Camarasauridae'), score: 97, massKg: null,
      description: 'Camarasaurus was an abundant macronarian sauropod from the Morrison Formation of western North America. Many skulls and skeletons across several growth stages document almost the entire anatomy, although the limits and validity of its named species still require revision.',
      facts: ['Camarasaurus had a relatively short, deep skull and robust teeth suited to cropping vegetation.', 'Most mounted skeletons combine material; abundance does not mean every display is one complete individual.'],
      age: 'Diagnostic material spans much of the Kimmeridgian-Tithonian Morrison Formation.', material: 'Numerous partial to nearly complete skulls and skeletons from many individuals and growth stages.', formations: ['Morrison Formation'],
      limit: 'Genus-level anatomy is exceptionally supported; species assignment, maximum mass and soft tissues remain less certain.', uncertainties: ['Species-level taxonomy needs modern specimen-level revision.', 'Feeding height and social behaviour are inferred.', 'Some historical referrals are non-diagnostic.'],
      sources: [src('specimen-level-analysis', 'Mateus & Tschopp (2013), A specimen-level cladistic analysis of Camarasaurus and revision of its species', 'https://docentes.fct.unl.pt/omateus/publications/specimen-level-cladistic-analysis-camarasaurus-dinosauria-sauropoda-and-revisio'), src('appendicular-anatomy', 'Tschopp & Mateus (2015), Articulated bone sets of manus and pedes of Camarasaurus', 'https://doi.org/10.26879/559'), nhm('camarasaurus')]
    }),
    camptosaurus: review({
      period: 'Late Jurassic', mya: 'about 155-149 million years ago', taxonomy: ornithischian('Cerapoda', 'Ornithopoda', 'Ankylopollexia'), score: 83,
      description: 'Camptosaurus dispar was a medium-sized ankylopollexian ornithopod from the Morrison Formation of western North America. Several partial skeletons and skulls document its anatomy, but many species and specimens historically assigned to Camptosaurus have been moved to other genera.',
      facts: ['The accepted genus concept is substantially narrower than in older books.', 'It was primarily bipedal and may have used the forelimbs in slow locomotion, but habitual gait is a functional inference.'],
      age: 'Secure C. dispar material is Kimmeridgian-Tithonian in the Morrison Formation.', material: 'Multiple partial skeletons and skulls, including complementary adult and juvenile material.', formations: ['Morrison Formation'],
      limit: 'General anatomy is well supported; species referrals, body mass and gait remain less certain.', uncertainties: ['Historical referrals from Europe and elsewhere largely represent other taxa.', 'The genus-level sample still needs specimen-by-specimen revision.'],
      sources: [src('systematic-revision', 'McDonald (2011), The taxonomy of species assigned to Camptosaurus', 'https://www.mapress.com/zt/article/view/zootaxa.2783.1.4'), src('species-reassessment', 'Carpenter & Wilson (2008), A new species of Camptosaurus and reassessment of the genus', 'https://doi.org/10.2992/0097-4463(2008)76%5B227:ANSOCO%5D2.0.CO;2'), nhm('camptosaurus')]
    }),
    carcharodontosaurus: review({
      period: 'Late Cretaceous', mya: 'about 100-94 million years ago', taxonomy: theropod('Tetanurae', 'Allosauroidea', 'Carcharodontosauria', 'Carcharodontosauridae'), score: 61,
      description: 'Carcharodontosaurus saharicus was a giant carcharodontosaurid from Cenomanian North Africa. The name originated with now-lost Algerian teeth and is stabilised by a large partial Moroccan neotype skull; the destroyed Egyptian skeleton long used to reconstruct it was separated in 2025 as Tameryraptor markgrafi.',
      facts: ['The Moroccan neotype SGM-Din 1 preserves a large but incomplete skull, not a full skeleton.', 'Postcranial and crest details from the Bahariya specimen named Tameryraptor must no longer be presented as C. saharicus anatomy.'],
      age: 'Secure C. saharicus evidence is Cenomanian, chiefly the historical Algerian type record and the Kem Kem Group neotype of Morocco.', material: 'Now-lost type teeth documented historically, one large partial neotype skull and limited comparable cranial remains; no secure complete skeleton.', formations: ['Kem Kem Group', 'Continental Intercalaire of Algeria'],
      limit: 'Skull size is clear, but total length and mass are extrapolated because secure postcrania are scarce.', uncertainties: ['C. iguidensis may not remain in the same genus.', 'Many isolated North African teeth and bones are not diagnostic.', 'The 2025 Tameryraptor revision is recent and should be monitored.'],
      sources: [src('neotype-and-cranial-description', 'Sereno et al. (1996), Predatory dinosaurs from the Sahara and the neotype of Carcharodontosaurus', 'https://doi.org/10.1126/science.272.5264.986'), src('recent-taxonomic-revision', 'Kellermann, Cuesta & Rauhut (2025), Reassessment of the Egyptian carcharodontosaurid and Tameryraptor markgrafi', 'https://doi.org/10.1371/journal.pone.0311096'), src('species-revision', 'Brusatte & Sereno (2007), A new species of Carcharodontosaurus from Niger', 'https://d3qi0qp55mx5f5.cloudfront.net/paulsereno/i/docs/07-JVP-Carch.iguidensis.pdf')]
    }),
    carnotaurus: review({
      period: 'Late Cretaceous', mya: 'approximately 72-69 million years ago', taxonomy: theropod('Ceratosauria', 'Abelisauridae', 'Carnotaurinae'), score: 96,
      description: 'Carnotaurus sastrei was a horned abelisaurid from the La Colonia Formation of Patagonia. Its single holotype is a nearly complete articulated skeleton with a skull and extensive skin impressions, providing exceptional anatomical evidence from one individual.',
      facts: ['Paired frontal horns, a deep skull and extremely reduced forelimbs are directly preserved.', 'Skin impressions show varied non-overlapping scales; an osteoderm-studded body or a specific colour pattern is not supported.'],
      age: 'The La Colonia Formation is latest Cretaceous, but the exact late Campanian-Maastrichtian age of the type horizon remains uncertain.', material: 'One nearly complete articulated skull and skeleton with extensive skin impressions.', formations: ['La Colonia Formation'],
      limit: 'One superb individual supports anatomy and skin texture, but not population variation, colour, maximum size or behaviour.', uncertainties: ['Only one specimen is known.', 'The exact formation age remains debated.', 'Horn and tail functions are biomechanical hypotheses.'],
      sources: [src('original-description', 'Bonaparte, Novas & Coria (1990), Carnotaurus sastrei', 'https://www.biodiversitylibrary.org/part/226819'), src('integument-revision', 'Hendrickx & Bell (2022), The scaly skin of Carnotaurus sastrei', 'https://doi.org/10.1016/j.cretres.2021.104994'), nhm('carnotaurus')]
    }),
    caudipteryx: review({
      period: 'Early Cretaceous', mya: 'about 125 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Oviraptorosauria', 'Caudipterygidae'), score: 95,
      description: 'Caudipteryx was a small feathered oviraptorosaur from the Yixian Formation of Liaoning, China. Multiple nearly complete skeletons preserve pennaceous feathers on the arms and tail as well as gastroliths in the abdominal region.',
      facts: ['Its short, symmetrical arm feathers were not a powered-flight wing.', 'Gastroliths and tooth reduction are consistent with plant consumption or omnivory but do not prove a strictly herbivorous diet.'],
      age: 'The relevant Yixian beds are early Aptian, close to 125 million years old.', material: 'Multiple nearly complete articulated skeletons, many with feathers and gastroliths.', formations: ['Yixian Formation'],
      limit: 'Skeleton and plumage are exceptionally documented; colour, precise diet and species boundaries remain uncertain.', uncertainties: ['C. zoui and C. dongi distinctions have been debated.', 'Gastrolith function and exact diet are not uniquely determined.'],
      sources: [src('original-description', 'Ji et al. (1998), Two feathered dinosaurs from northeastern China', 'https://doi.org/10.1038/31635'), nhm('caudipteryx')]
    }),
    cedarpelta: review({
      period: 'Late Cretaceous', mya: 'about 98-94 million years ago', taxonomy: ornithischian('Thyreophora', 'Ankylosauria', 'Ankylosauridae'), score: 66, length: null,
      description: 'Cedarpelta bilbeyhallorum was an ankylosaurid from the Mussentuchit Member of the Cedar Mountain Formation of Utah. Disarticulated skulls, armour and postcranial bones from more than one individual collectively document the animal; no single complete skeleton is known.',
      facts: ['The skull material is unusually informative for an early ankylosaurid.', 'No diagnostic tail club is preserved, so a clubbed tail should not be asserted for this genus.'],
      age: 'The Mussentuchit Member is Cenomanian, not Barremian or earliest Cretaceous.', material: 'Disarticulated cranial, postcranial and armour elements from at least two individuals.', formations: ['Mussentuchit Member, Cedar Mountain Formation'],
      limit: 'Collective anatomy is moderate; individual association, full armour pattern and tail anatomy remain uncertain.', uncertainties: ['Material represents multiple individuals.', 'Its placement at or just outside Ankylosauridae varies.', 'The arrangement of osteoderms is incompletely known.'],
      sources: [src('original-description', 'Carpenter et al. (2001), Cedarpelta bilbeyhallorum, a new primitive ankylosaurid from Utah', 'https://books.google.com/books?id=04UqgW3Lo3QC&pg=PA201'), src('ankylosaur-systematics', 'Arbour & Currie (2016), Systematics, phylogeny and palaeobiogeography of ankylosaurid dinosaurs', 'https://doi.org/10.1080/14772019.2015.1059985'), nhm('cedarpelta')]
    }),
    centrosaurus: review({
      period: 'Late Cretaceous', mya: 'about 76.5-75.5 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Ceratopsidae', 'Centrosaurinae'), score: 99,
      description: 'Centrosaurus apertus was a centrosaurine ceratopsid from the Dinosaur Park Formation of Alberta. Thousands of bones from many individuals, including articulated skeletons, skulls and extensive bonebeds, make it among the best sampled non-avian dinosaurs.',
      facts: ['A large nasal horn and hooked frill ornament are documented across growth stages.', 'Mass-death bonebeds support group aggregation at death but do not alone reveal permanent herd structure or migration.'],
      age: 'C. apertus is concentrated in the lower-middle Dinosaur Park Formation, late Campanian.', material: 'Thousands of cranial and postcranial bones, including many skulls, skeletons and multi-individual bonebeds.', formations: ['Dinosaur Park Formation', 'upper Oldman Formation'],
      limit: 'Anatomy and growth are exceptionally secure; colour, social system and exact body mass remain uncertain.', uncertainties: ['Bonebed processes and social interpretation are debated.', 'Some named centrosaur species may reflect variation or different horizons.'],
      sources: [src('bonebed-taphonomy', 'Eberth et al. (2015), Taphonomy and palaeoecology of a Centrosaurus bonebed', 'https://doi.org/10.2110/palo.2014.084'), src('ontogeny', 'Frederickson & Tumarkin-Deratzian (2014), Craniofacial ontogeny in Centrosaurus apertus', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3933270/'), nhm('centrosaurus')]
    }),
    ceratosaurus: review({
      period: 'Late Jurassic', mya: 'about 153-148 million years ago', taxonomy: theropod('Ceratosauria', 'Ceratosauridae'), score: 82,
      description: 'Ceratosaurus nasicornis was a horned ceratosaurian theropod from the Morrison Formation of western North America. The holotype preserves a skull and much of the skeleton; additional specimens improve coverage, while several proposed species and referrals remain disputed.',
      facts: ['The midline nasal horn core and paired orbital rugosities are directly preserved.', 'A lateral row of small osteoderms is associated with the holotype, but their complete arrangement is unknown.'],
      age: 'Secure C. nasicornis material is Kimmeridgian-Tithonian in the Morrison Formation.', material: 'One substantial partial skull and skeleton plus several incomplete referred individuals.', formations: ['Morrison Formation'],
      limit: 'Core anatomy is strong; species boundaries, armour layout, maximum size and ecology are less secure.', uncertainties: ['C. dentisulcatus and C. magnicornis may not be distinct species.', 'European and African referrals are debated.'],
      sources: [src('monographic-description', 'Gilmore (1920), Osteology of the carnivorous Dinosauria in the United States National Museum', 'https://repository.si.edu/handle/10088/10108'), src('theropod-systematics', 'Carrano, Benson & Sampson (2012), The phylogeny of Tetanurae and comparative theropod taxonomy', 'https://doi.org/10.1080/14772019.2011.630927'), nhm('ceratosaurus')]
    }),
    cetiosauriscus: review({
      period: 'Middle Jurassic', mya: 'about 166-164 million years ago', taxonomy: sauropod('Eusauropoda', 'Neosauropoda'), score: 48,
      description: 'Cetiosauriscus stewarti was a sauropod from the Callovian Oxford Clay Formation of England. Its only confident skeleton preserves the rear trunk, pelvis, much of the tail and limbs but no skull or neck; its exact relationships remain unresolved.',
      facts: ['The name C. stewarti has been conserved for specimen NHMUK PV R3078.', 'Swiss material once called Cetiosauriscus greppini belongs to the separate genus Amanzia.'],
      age: 'The type skeleton is Callovian in the Oxford Clay Formation.', material: 'One incomplete postcranial skeleton comprising posterior vertebral column, girdles and limbs.', formations: ['Oxford Clay Formation'],
      limit: 'No skull or neck is known, and one individual cannot tightly constrain size or placement.', uncertainties: ['Phylogenetic analyses disagree between non-neosauropod eusauropod and diplodocoid affinities.', 'Some elements are incomplete or restored.'],
      sources: [src('systematic-revision', 'Heathcote & Upchurch (2025), Critical reappraisal of Cetiosauriscus stewarti and diplodocoid relationships', 'https://doi.org/10.1080/14772019.2025.2550760'), src('taxonomic-separation', 'Schwarz et al. (2020), Redescription of the Swiss sauropod Amanzia greppini', 'https://discovery.ucl.ac.uk/id/eprint/10086222/'), nhm('cetiosauriscus')]
    }),
    cetiosaurus: review({
      period: 'Middle Jurassic', mya: 'about 168-166 million years ago', taxonomy: sauropod('Eusauropoda'), score: 72,
      description: 'Cetiosaurus oxoniensis was a basal eusauropod from the Great Oolite Group of England. Several partial postcranial skeletons collectively document a large, robust quadruped, but skull remains are extremely limited and older species assignments are taxonomically confused.',
      facts: ['C. oxoniensis was conserved as the type species to stabilise the long-used genus name.', 'Most historical Cetiosaurus species are not necessarily congeneric with C. oxoniensis.'],
      age: 'Secure C. oxoniensis material is Bathonian in the Great Oolite Group.', material: 'Several partial postcranial skeletons and very limited cranial material.', formations: ['Great Oolite Group', 'Rutland Formation'],
      limit: 'Postcranial build is moderately supported; skull, species limits and maximum size remain uncertain.', uncertainties: ['Historical referrals are taxonomically heterogeneous.', 'Its exact position among basal eusauropods varies.', 'No complete skull is known.'],
      sources: [src('systematic-revision', 'Upchurch & Martin (2003), The anatomy and taxonomy of Cetiosaurus', 'https://doi.org/10.1111/1475-4983.00275'), src('nomenclatural-ruling', 'ICZN (2014), Conservation of Cetiosaurus oxoniensis as the type species', 'https://www.biotaxa.org/bzn/issue/view/5182'), nhm('cetiosaurus')]
    }),
    chaoyangsaurus: review({
      period: 'Late Jurassic', mya: 'approximately 150-145 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Chaoyangsauridae'), score: 36,
      description: 'Chaoyangsaurus youngi was a small early ceratopsian from the Tuchengzi Formation of Liaoning, China. It is known from a single partial skull with associated postcranial fragments, making detailed body proportions and ecology uncertain.',
      facts: ['Cranial anatomy supports a position near the base of Ceratopsia.', 'It lacked the elaborate horns and frill of later ceratopsids; the rest of its external appearance is reconstructed.'],
      age: 'The upper Tuchengzi Formation is usually considered latest Jurassic, probably Tithonian, but dating remains debated.', material: 'One partial skull and fragmentary associated postcrania.', formations: ['Tuchengzi Formation'],
      limit: 'One incomplete specimen cannot establish adult size, postcranial details or behaviour.', uncertainties: ['The formation age is debated.', 'Only one fragmentary individual is known.', 'Relationships among earliest ceratopsians vary.'],
      sources: [src('original-description', 'Zhao, Cheng & Xu (1999), The earliest ceratopsian from the Tuchengzi Formation', 'https://doi.org/10.1080/02724634.1999.10011181'), nhm('chaoyangsaurus')]
    }),
    chasmosaurus: review({
      period: 'Late Cretaceous', mya: 'about 76.5-75.5 million years ago', taxonomy: ornithischian('Cerapoda', 'Ceratopsia', 'Ceratopsidae', 'Chasmosaurinae'), score: 96,
      description: 'Chasmosaurus was a long-frilled chasmosaurine ceratopsid from the Dinosaur Park Formation of Alberta. Numerous skulls and skeletons, including juveniles and skin impressions, document its anatomy, while species limits and the significance of frill variation remain debated.',
      facts: ['C. belli is securely recognised; C. russelli is also commonly retained, whereas Vagaceratops is generally separate.', 'Large frill openings and marginal ornaments are preserved, but display, species recognition and sexual selection are hypotheses.'],
      age: 'Diagnostic Chasmosaurus material is late Campanian in the Dinosaur Park Formation.', material: 'Numerous skulls and partial to nearly complete skeletons across growth stages, with some skin impressions.', formations: ['Dinosaur Park Formation'],
      limit: 'Anatomy and growth are strong; species diagnoses, colour and social-display functions remain uncertain.', uncertainties: ['C. belli and C. russelli may overlap in variable characters.', 'Some specimens historically assigned to Chasmosaurus are Vagaceratops or indeterminate.'],
      sources: [src('taxonomic-revision', 'Maidment & Barrett (2011), A new specimen and taxonomic revision of Chasmosaurus', 'https://doi.org/10.11646/zootaxa.2963.1.1'), src('juvenile-anatomy', 'Currie et al. (2016), A juvenile chasmosaurine ceratopsid from Dinosaur Provincial Park', 'https://doi.org/10.1371/journal.pone.0145805'), nhm('chasmosaurus')]
    }),
    chindesaurus: review({
      period: 'Late Triassic', mya: 'about 213-210 million years ago', taxonomy: ['Dinosauria', 'Saurischia'], score: 38, length: null,
      diet: null,
      description: 'Chindesaurus bryansmalli was an early saurischian from the Petrified Forest Member of the Chinle Formation in Arizona. It is based on one incomplete postcranial skeleton without a skull; whether it is a herrerasaurid or another early theropod-line saurischian remains unresolved.',
      facts: ['The holotype preserves vertebral, pelvic and hind-limb elements but no diagnostic complete skull or forelimb.', 'Carnivory and bipedalism are reasonable broad inferences; detailed feeding ecology is unknown.'],
      age: 'The type horizon is late Norian in the Petrified Forest Member of the Chinle Formation.', material: 'One incomplete postcranial skeleton, with uncertain additional referrals.', formations: ['Petrified Forest Member, Chinle Formation'],
      limit: 'Lack of cranial material and unstable early-dinosaur relationships prevent a confident detailed reconstruction.', uncertainties: ['Its position as a herrerasaurid or early theropod differs among analyses.', 'Several referred specimens may not belong to the genus.'],
      sources: [src('systematic-reassessment', 'Marsh et al. (2019), A re-evaluation of Chindesaurus bryansmalli and early dinosaur evolution', 'https://doi.org/10.1080/02724634.2019.1645682'), src('authoritative-park-context', 'National Park Service, Late Triassic dinosaurs of Petrified Forest', 'https://www.nps.gov/pefo/learn/nature/dinosaurs.htm'), nhm('chindesaurus')]
    }),
    chinshakiangosaurus: review({
      period: 'Early Jurassic', mya: 'approximately 201-190 million years ago', taxonomy: sauropodomorph('Sauropodiformes', 'Sauropoda'), score: 30, length: null,
      taxonomicStatus: 'provisionally valid but fragmentary',
      description: 'Chinshakiangosaurus chunghoensis was an early sauropod or near-sauropod from the Fengjiahe Formation of Yunnan, China. The accepted species spelling is chunghoensis, and the fragmentary skeleton is Early Jurassic rather than Late Jurassic.',
      facts: ['The best-known element is a partial lower jaw with teeth, accompanied by fragmentary postcranial bones.', 'Its jaw suggests a fleshy cheek is possible, but soft tissue and exact feeding mechanics are not preserved.'],
      age: 'The Fengjiahe Formation is Early Jurassic, broadly Hettangian-Sinemurian.', material: 'A fragmentary skeleton including a partial dentary, vertebrae and limb elements.', formations: ['Fengjiahe Formation'],
      limit: 'Fragmentary, poorly associated material prevents precise size, posture or phylogenetic claims.', uncertainties: ['The diagnosis and association of the material need renewed study.', 'Its position as basal sauropod or close sauropodiform varies.', 'The formation is not narrowly dated.'],
      sources: [src('systematic-revision', 'Upchurch et al. (2007), A re-evaluation of Chinshakiangosaurus chunghoensis', 'https://doi.org/10.1017/S0016756806003062'), src('comparative-context', 'Yao et al. (2022), A new early armoured dinosaur and Early Jurassic Yunnan sauropodomorph fauna', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8929930/'), nhm('chinshakiangosaurus')]
    }),
    chirostenotes: review({
      period: 'Late Cretaceous', mya: 'about 77-75 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Oviraptorosauria', 'Caenagnathidae'), score: 53,
      diet: 'diet uncertain; omnivory or herbivory plausible',
      description: 'Chirostenotes pergracilis was a caenagnathid oviraptorosaur from the Dinosaur Park Formation of Alberta. The name is based on a pair of hands; referred jaws and partial skeletons clarify the body plan, but associations among historically named caenagnathid parts remain complex.',
      facts: ['Modern studies generally distinguish Chirostenotes from the jaw-based genus Caenagnathus.', 'A toothless beak and bipedal stance are supported at clade level; exact diet is unresolved.'],
      age: 'Secure C. pergracilis material is late Campanian in the Dinosaur Park Formation, not Maastrichtian.', material: 'Type hands and several incomplete referred cranial and postcranial specimens with varying association confidence.', formations: ['Dinosaur Park Formation'],
      limit: 'Composite anatomy is useful but taxonomic association limits precise size and species claims.', uncertainties: ['Some referred skeletons may represent other caenagnathids.', 'The relationship to Caenagnathus and Macrophalangia has a complex nomenclatural history.'],
      sources: [src('systematic-revision', 'Sues (1997), On Chirostenotes and the relationships of caenagnathids', 'https://doi.org/10.1080/02724634.1997.10011018'), src('recent-revision', 'Funston & Currie (2020), Caenagnathid anatomy and the status of Chirostenotes', 'https://doi.org/10.1080/08912963.2020.1726908'), nhm('chirostenotes')]
    }),
    chubutisaurus: review({
      period: 'Early-Late Cretaceous', mya: 'approximately 125-94 million years ago', taxonomy: sauropod('Neosauropoda', 'Macronaria', 'Somphospondyli'), score: 48, length: null,
      description: 'Chubutisaurus insignis was a large somphospondylan sauropod from the Cerro Barcino Formation of Patagonia. Its quarry produced a fragmentary postcranial skeleton including vertebrae and limb bones but no skull; older, very narrow age claims are not secure.',
      facts: ['The recovered material provides useful limb and vertebral anatomy but not a complete skeleton.', 'It is usually placed just outside or close to Titanosauria; the precise node varies among analyses.'],
      age: 'The relevant Cerro Barcino beds are broadly late Early to early Late Cretaceous, with member correlation and numerical age still debated.', material: 'One incomplete postcranial skeleton recovered in separate campaigns.', formations: ['Cerro Barcino Formation'],
      limit: 'No skull and incomplete axial series limit body-size, feeding and relationship claims.', uncertainties: ['The exact stratigraphic member and age have been reported inconsistently.', 'Only one principal individual is known.', 'Phylogenetic placement varies.'],
      sources: [src('systematic-redescription', 'Carballido et al. (2011), Osteology and phylogenetic relationships of Chubutisaurus insignis', 'https://doi.org/10.1080/02724634.2011.539651'), src('open-author-manuscript', 'Carballido et al. (2011), Chubutisaurus redescription, author copy', 'https://staff.mef.org.ar/images/investigadores/jose_luis_carballido/Papers/Carballido_et_al._2011_Chubutisaurus.pdf'), nhm('chubutisaurus')]
    }),
    chungkingosaurus: review({
      period: 'Late Jurassic', mya: 'approximately 163-157 million years ago', taxonomy: ornithischian('Thyreophora', 'Stegosauria', 'Stegosauridae'), score: 45,
      description: 'Chungkingosaurus jiangbeiensis was a small stegosaur from the upper Shaximiao Formation of Chongqing, China. Its holotype is a partial skull and incomplete skeleton with plates and spikes; extensive restoration in the mount means exact armour arrangement requires caution.',
      facts: ['The taxon remains recognised in recent reassessments, but its anatomy and position among stegosaurs are incompletely resolved.', 'Tail spikes are preserved in the assemblage, although their exact number and arrangement on the living animal are uncertain.'],
      age: 'The upper Shaximiao Formation is Late Jurassic, commonly Oxfordian.', material: 'One partial skull and incomplete postcranial skeleton with dermal armour, plus uncertain referrals.', formations: ['upper Shaximiao Formation'],
      limit: 'Incomplete and restored material prevents a secure full armour pattern or precise adult-size estimate.', uncertainties: ['The holotype mount contains substantial restoration.', 'Some referred specimens may represent other stegosaurs.', 'A fully peer-reviewed modern monograph is lacking.'],
      sources: [src('original-description', 'Dong, Zhou & Zhang (1983), Dinosaurs from the Jurassic of Sichuan', 'https://www.naturalhistory.si.edu/sites/default/files/media/translated_publications/Dong%26amp%3B_83.pdf'), src('recent-preprint-reassessment', 'Li et al. (2024), Revision of Chinese stegosaurs and a new phylogenetic analysis', 'https://doi.org/10.1101/2024.09.29.615678'), nhm('chungkingosaurus')]
    }),
    citipati: review({
      period: 'Late Cretaceous', mya: 'about 75-71 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Oviraptorosauria', 'Oviraptoridae'), score: 94,
      diet: 'diet uncertain; omnivory or herbivory plausible',
      description: 'Citipati osmolskae was a large oviraptorid from the Djadokhta Formation of Mongolia. Several skulls and skeletons, embryos and adult-on-nest specimens document its toothless beak and direct association with eggs.',
      facts: ['Adult specimens preserved over nests support brooding posture, though fine behavioural details remain inferred.', 'The famous specimen called Big Mama is referred to Citipati; not every crest-bearing Djadokhta oviraptorid belongs to this species.'],
      age: 'The Djadokhta Formation is late Campanian, broadly about 75-71 million years old.', material: 'Multiple skulls and partial to near-complete skeletons, embryos, eggs and brooding adults.', formations: ['Djadokhta Formation'],
      limit: 'Anatomy and nest association are strong; colour, sex, exact diet and species assignment of every specimen are uncertain.', uncertainties: ['Several Djadokhta oviraptorid morphs remain unnamed or differently assigned.', 'Nest posture does not reveal the complete incubation strategy.', 'Diet is unresolved.'],
      sources: [src('cranial-description', 'Clark, Norell & Barsbold (2002), Cranial anatomy of Citipati osmolskae', 'https://doi.org/10.1206/0003-0082(2002)364%3C0001:CAOCOT%3E2.0.CO;2'), src('nesting-function', 'Moyer et al. (2016), Microscopic and immunohistochemical analyses of the claw of nesting Citipati', 'https://doi.org/10.1098/rspb.2016.1997'), nhm('citipati')]
    }),
    coelophysis: review({
      period: 'Late Triassic', mya: 'about 215-205 million years ago', taxonomy: theropod('Neotheropoda', 'Coelophysoidea', 'Coelophysidae'), score: 99,
      description: 'Coelophysis bauri was a small early neotheropod from the Chinle Group of the south-western United States. The Ghost Ranch bonebeds contain hundreds of individuals and many articulated skeletons, making its anatomy and growth exceptionally well documented.',
      facts: ['The neotype AMNH 7224 stabilises C. bauri, and Rioarribasaurus colberti is an objective junior synonym.', 'A famous cannibalism claim was overturned when the supposed juvenile remains inside one ribcage were identified as a crocodylomorph.'],
      age: 'Diagnostic C. bauri material is late Norian to Rhaetian in the Chinle Group, especially the Rock Point Formation.', material: 'Hundreds of partial to complete skeletons from many growth stages, especially at Ghost Ranch.', formations: ['Chinle Group', 'Rock Point Formation'],
      limit: 'Anatomy and growth are excellent; species referrals, colour, sociality and exact ecology remain less certain.', uncertainties: ['Bonebed accumulation does not prove pack living.', 'Some older Coelophysis referrals represent other genera.', 'Feathering is not directly preserved.'],
      sources: [src('anatomical-review', 'Tykoski & Rowe (2004), Ceratosauria, including Coelophysis', 'https://www.geo.utexas.edu/faculty/rowe/Publications/pdf/047%20Tykoski_Rowe%202004.pdf'), src('nomenclatural-ruling', 'ICZN (1996), Opinion 1842: Coelophysis bauri conserved by designation of a neotype', 'https://www.biodiversitylibrary.org/page/12250297'), nhm('coelophysis')]
    }),
    coelurus: review({
      period: 'Late Jurassic', mya: 'about 155-150 million years ago', taxonomy: theropod('Coelurosauria'), score: 34,
      description: 'Coelurus fragilis was a small basal coelurosaur from the Morrison Formation of Wyoming. It is known chiefly from one incomplete, disarticulated postcranial skeleton without a skull; many bones historically referred to it belong to other small theropods.',
      facts: ['The secure material includes vertebrae, pelvis and limb bones, but no diagnostic skull.', 'Bipedal carnivory is a broad coelurosaur inference; exact prey, feathers and speed are unknown.'],
      age: 'The type is Kimmeridgian-Tithonian within the Morrison Formation.', material: 'One incomplete disarticulated postcranial skeleton.', formations: ['Morrison Formation'],
      limit: 'A single skull-less skeleton cannot establish precise size, head anatomy or ecology.', uncertainties: ['Historical referrals are heterogeneous.', 'Its exact position near the base of Coelurosauria is weakly resolved.', 'A modern comprehensive redescription is needed.'],
      sources: [src('comparative-revision', 'Carpenter, Miles & Cloward (2005), New small theropod material and reassessment of Coelurus', 'https://www.researchgate.net/publication/40662862_New_small_theropod_dinosaur_from_the_Upper_Jurassic_Morrison_Formation_of_Wyoming'), nhm('coelurus')]
    }),
    coloradisaurus: review({
      period: 'Late Triassic', mya: 'approximately 227-208 million years ago', taxonomy: sauropodomorph('Massospondylidae'), score: 82,
      description: 'Coloradisaurus brevis was a massospondylid sauropodomorph from the Los Colorados Formation of Argentina. Its holotype preserves a skull and much of the postcranial skeleton, providing strong evidence for a medium-sized bipedal early sauropodomorph.',
      facts: ['Detailed skull and postcranial studies support massospondylid affinities.', 'Broad herbivory or omnivory is plausible, but exact food and feeding behaviour are not preserved.'],
      age: 'The Los Colorados Formation is Norian-Rhaetian, though its long numerical span is not resolved at every locality.', material: 'One substantially complete skull and partial postcranial skeleton, with additional referred remains.', formations: ['Los Colorados Formation'],
      limit: 'One good individual supports anatomy; population variation, exact adult mass and diet remain uncertain.', uncertainties: ['The formation age is broad.', 'Some referred remains have weaker association.', 'Massospondylid relationships vary modestly.'],
      sources: [src('postcranial-anatomy', 'Apaldetti et al. (2013), The postcranial anatomy of Coloradisaurus brevis', 'https://doi.org/10.1111/j.1475-4983.2012.01198.x'), src('cranial-anatomy', 'Apaldetti et al. (2014), Cranial anatomy of Coloradisaurus brevis', 'https://staff.mef.org.ar/images/investigadores/diego_pol/papers/68.pdf'), nhm('coloradisaurus')]
    }),
    compsognathus: review({
      period: 'Late Jurassic', mya: 'about 150-145 million years ago', taxonomy: theropod('Coelurosauria', 'Compsognathidae'), score: 90,
      description: 'Compsognathus longipes was a small coelurosaur from the Tithonian lagoonal limestones of Germany and France. Two nearly complete skeletons of different sizes document its slender bipedal body; C. corallestris is generally treated as the same species.',
      facts: ['The smaller German specimen contains lizard remains in its abdominal region, direct evidence of predation or scavenging.', 'The larger French specimen shows that the famously tiny German individual was not the maximum adult size.'],
      age: 'The Solnhofen and Canjuers lagoonal deposits are Tithonian.', material: 'Two nearly complete skeletons, one with gut-region prey remains.', formations: ['Solnhofen Limestone', 'Canjuers Lagerstaette'],
      limit: 'Two good skeletons support anatomy and small-prey feeding; growth stage, feathers and population size range remain uncertain.', uncertainties: ['The ontogenetic stage of each specimen is debated.', 'No direct feather impressions are known for Compsognathus itself.', 'Compsognathid monophyly is contested.'],
      sources: [src('manual-anatomy', 'Gishlick (2007), Manual morphology of Compsognathus longipes and diagnosis of Compsognathidae', 'https://doi.org/10.1111/j.1096-3642.2007.00269.x'), src('museum-specimen-record', 'Smithsonian Institution, Compsognathus longipes specimen record', 'https://www.si.edu/object/nmnhpaleobiology_3451169'), nhm('compsognathus')]
    }),
    concavenator: review({
      period: 'Early Cretaceous', mya: 'about 130-125 million years ago', taxonomy: theropod('Tetanurae', 'Allosauroidea', 'Carcharodontosauria'), score: 95,
      description: 'Concavenator corcovatus was a carcharodontosaurian theropod from the Barremian Las Hoyas locality of Spain. One nearly complete articulated skeleton preserves unusually tall dorsal vertebrae and patches of scale impressions.',
      facts: ['The tall neural spines over the hips directly support a raised dorsal structure, but its soft-tissue outline and function are unknown.', 'Bumps on the ulna were proposed as feather-quill attachment sites; that interpretation remains contested and does not demonstrate a fully feathered body.'],
      age: 'The La Huerguina Formation at Las Hoyas is Barremian.', material: 'One nearly complete articulated skeleton with limited skin impressions.', formations: ['La Huerguina Formation'],
      limit: 'One exceptional skeleton supports anatomy; integument beyond preserved patches, colour and behaviour remain uncertain.', uncertainties: ['The ulnar bumps may not be homologous with avian quill knobs.', 'Soft tissue over the dorsal spines is unknown.', 'Its exact carcharodontosaurian position varies.'],
      sources: [src('original-description', 'Ortega, Escaso & Sanz (2010), A bizarre, humped carcharodontosauria from Spain', 'https://doi.org/10.1038/nature09181'), nhm('concavenator')]
    }),
    conchoraptor: review({
      period: 'Late Cretaceous', mya: 'approximately 84-72 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Oviraptorosauria', 'Oviraptoridae'), score: 76,
      diet: 'diet uncertain; omnivory or herbivory plausible',
      description: 'Conchoraptor gracilis was a small, crestless oviraptorid from the Campanian Barun Goyot Formation of Mongolia. Multiple skulls and partial skeletons document its toothless beak and light build, but its name does not constitute evidence that it ate shellfish.',
      facts: ['Jaw mechanics are compatible with powerful biting, but exact food items are not preserved.', 'Some specimens once assigned to Conchoraptor may represent other closely related oviraptorids.'],
      age: 'The Barun Goyot Formation is Campanian, with a broad numerical age.', material: 'Multiple skulls and incomplete postcranial skeletons.', formations: ['Barun Goyot Formation'],
      limit: 'Anatomy is moderately strong; species referrals, diet, colour and plumage details remain uncertain.', uncertainties: ['Diet is unknown despite the shellfish-based name.', 'Several small oviraptorid taxa from Mongolia are difficult to distinguish.', 'No direct plumage is preserved.'],
      sources: [src('endocranial-anatomy', 'Kundrat (2007), Avian-like attributes of a virtual brain model of Conchoraptor gracilis', 'https://doi.org/10.1007/s00114-007-0219-1'), src('oviraptorid-diversity', 'Funston et al. (2018), Oviraptorosaur anatomy, diversity and ecology in the Nemegt Basin', 'https://doi.org/10.1016/j.palaeo.2017.10.023'), nhm('conchoraptor')]
    }),
    confuciusornis: review({
      period: 'Early Cretaceous', mya: 'about 125-120 million years ago', taxonomy: theropod('Coelurosauria', 'Maniraptora', 'Avialae', 'Pygostylia', 'Confuciusornithidae'), score: 99,
      diet: 'diet varied or uncertain; evidence supports both plant and animal foods',
      description: 'Confuciusornis sanctus was a toothless early pygostylian bird from the Jehol Biota of northeastern China. Hundreds of articulated skeletons preserve wing feathers and, in some individuals, paired ribbon-like tail feathers, allowing unusually detailed study of growth and variation.',
      facts: ['The long paired tail feathers occur only in part of the sample; they are likely related to sexual display, but they cannot simply be assigned to males in every specimen.', 'Wing anatomy and feathers support flight ability, while take-off performance and flight style remain debated.'],
      age: 'Most C. sanctus specimens are from Barremian-Aptian beds of the Yixian Formation, around 125-120 million years old.', material: 'Hundreds of partial to complete articulated skeletons, many preserving feathers.', formations: ['Yixian Formation'],
      limit: 'Anatomy and plumage are exceptional; species boundaries, sex assignment, colour and flight performance remain uncertain.', uncertainties: ['Several named Confuciusornis species may be synonyms or represent variation.', 'Tail-streamer sex association is probabilistic rather than universal.', 'Flight capacity varies with biomechanical assumptions.'],
      sources: [src('systematic-revision', 'Wang Min et al. (2019), Taxonomic revision of Confuciusornis', 'https://doi.org/10.19615/j.cnki.1000-3118.180530'), src('reproductive-biology', 'Chinsamy et al. (2013), Gender identification of the Mesozoic bird Confuciusornis', 'https://doi.org/10.1038/ncomms2377'), src('ontogeny-and-ecology', 'Wu et al. (2022), Ontogenetic niche shifts in Confuciusornis', 'https://doi.org/10.1016/j.cub.2022.02.010')]
    }),
    corythosaurus: review({
      period: 'Late Cretaceous', mya: 'about 77-75 million years ago', taxonomy: ornithischian('Cerapoda', 'Ornithopoda', 'Hadrosauridae', 'Lambeosaurinae'), score: 98,
      description: 'Corythosaurus casuarius was a helmet-crested lambeosaurine hadrosaurid from the Dinosaur Park Formation of Alberta. Many skulls and skeletons across growth stages, including skin impressions, document its anatomy and the dramatic ontogenetic growth of its hollow crest.',
      facts: ['The internal nasal passages of the crest are preserved and could affect sound resonance, but no specific call can be reconstructed as fact.', 'Many historical Corythosaurus species are now interpreted as growth or individual variation within C. casuarius.'],
      age: 'Diagnostic C. casuarius material is late Campanian in the Dinosaur Park Formation.', material: 'Many skulls and partial to complete skeletons across growth stages, some preserving skin impressions.', formations: ['Dinosaur Park Formation'],
      limit: 'Anatomy and crest growth are exceptionally supported; colour, vocalisation and social signalling remain inferential.', uncertainties: ['The exact acoustic properties of living soft tissues are unknown.', 'Some species-level distinctions and referrals remain debated.'],
      sources: [src('specimen-record', 'Smithsonian Institution, Corythosaurus casuarius specimen record', 'https://www.si.edu/object/nmnhpaleobiology_3440896'), src('phylogenetic-context', 'Madriñan et al. (2021), Phylogenetic nomenclature and relationships of hadrosaurids', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8667728/'), nhm('corythosaurus')]
    }),
    cryolophosaurus: review({
      period: 'Early Jurassic', mya: 'about 191-182 million years ago', taxonomy: theropod('Neotheropoda'), score: 69,
      description: 'Cryolophosaurus ellioti was a large early neotheropod from the Hanson Formation of Antarctica. The principal specimen preserves a partial skull with a distinctive transverse crest and an incomplete postcranial skeleton; it is Early Jurassic, not Middle Jurassic.',
      facts: ['The crest is directly preserved, but colour and display function are unknown.', 'It has sometimes been called an allosauroid, yet modern analyses place it variably among early neotheropods rather than securely within Allosauridae.'],
      age: 'The Hanson Formation type horizon is Pliensbachian, approximately 191-182 million years old.', material: 'One principal partial skull and incomplete skeleton, with additional material not yet fully published.', formations: ['Hanson Formation'],
      limit: 'The main individual supports core anatomy; exact size, complete skull, growth and phylogenetic placement remain uncertain.', uncertainties: ['Only one principal specimen is fully described.', 'Additional material is incompletely published.', 'Its position among early neotheropods varies strongly.'],
      sources: [src('original-description', 'Hammer & Hickerson (1994), A crested theropod dinosaur from Antarctica', 'https://doi.org/10.1126/science.264.5160.828'), src('anatomical-revision', 'Smith et al. (2007), Osteology of Cryolophosaurus ellioti', 'https://doi.org/10.1111/j.1096-3642.2007.00325.x'), src('authoritative-antarctic-reference', 'Australian Antarctic Data Centre, Cryolophosaurus taxon profile', 'https://data.aad.gov.au/aadc/biodiversity/taxon_profile.cfm?taxon_id=117961')]
    })
  };
})();
