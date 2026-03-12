import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Personal.css";


export default function Personal() {
  const [expanded, setExpanded] = useState({
    overview: true,
    website: false,
    email: false,
    product: false,
    social: false,
    pitch: false,
    blog: false,
  });

  const toggle = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <motion.div
      className="personal-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Personal</h1>
      <h3 className="tagline">Essays and excerpts from works of fiction.</h3>

      {/* Overview */}
      <section>
        <h2 onClick={() => toggle("overview")} className="collapsible-header">
          Overview
        </h2>
        <AnimatePresence>
          {expanded.overview && (
            <motion.div
              className="collapsible-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
             <p>From essays on queer subtext in classic literature to works of sapphic romance, science fiction, and fantasy, here is a glimpse of my personal projects.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Queer Subtext */}
      <section>
        <h2 onClick={() => toggle("website")} className="collapsible-header">
        📖 The Classics Your English Teacher Insists Are Straight (But Definitely Aren’t)
        </h2>
        <AnimatePresence>
          {expanded.website && (
            <motion.div
              className="collapsible-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >

<article>
<section>
<p>
There’s a particular kind of frustration that comes with having your interpretation dismissed in a literature classroom—especially when the people doing the dismissing are the ones who insist that literature is open to interpretation.
</p>

<p>
For queer students, this moment arrives predictably. Someone points out the homoerotic tension between Finny and Gene in <em>A Separate Peace</em>. A classmate suggests Nick Carraway might not be entirely straight. A discussion of Sheridan Le Fanu’s <em>Carmilla</em> somehow manages to avoid the fact that the entire plot revolves around a female vampire seducing women.
</p>

<p>
At this point, the room often fills with nervous laughter, followed by a quick return to the “correct” interpretation.
</p>

<p>
English departments love to champion the idea that literature contains multitudes—that texts shift meaning depending on who reads them and when. Yet queer readings are often treated as speculative, unserious, or overly modern.
</p>

<p>
But queer interpretation isn’t rewriting the canon. More often, it simply means paying attention.
</p>

<p>
Classic literature—from <em>Emma</em> to <em>The Great Gatsby</em>—is full of gender ambiguity, intense same-sex attachments, and relationships that resist tidy heterosexual explanations. Sometimes the evidence is subtle. Sometimes it’s… less subtle.
</p>

<p>
Either way, the canon has never been quite as straight as the syllabus suggests.
</p>

</section>

<section>

<h2><em>Emma</em> — Jane Austen</h2>

<p>
Jane Austen’s novels are famous for their marriage plots, which can make it easy to overlook the stranger social dynamics unfolding around them.
</p>

<p>
Emma Woodhouse, for instance, occupies an unusually powerful position for a young woman of her time. Unlike most Austen heroines, she isn’t pressured by financial insecurity or social precarity. She openly declares she has no intention of marrying and seems perfectly content managing the social world of Highbury herself.
</p>

<p>
Enter Harriet Smith.
</p>

<p>
Emma takes Harriet under her wing with an intensity that borders on possessive. She shapes Harriet’s friendships, her romantic prospects, and even her sense of social identity. Their relationship is framed as mentorship, but it carries a degree of emotional investment that makes modern readers pause.
</p>

<p>
Emma’s determination to orchestrate Harriet’s life often feels less like friendly guidance and more like the careful management of someone she considers her own.
</p>

<p>
Only when Emma begins to fear losing control of her social sphere does Mr. Knightley emerge as a romantic possibility.
</p>

</section>

<section>

<h2><em>The Great Gatsby</em> — F. Scott Fitzgerald</h2>

<p>
Nick Carraway occupies the classic position of the peripheral narrator: close enough to observe the drama, distant enough to comment on it.
</p>

<p>
But Nick’s observations linger in curious places.
</p>

<p>
His description of Jordan Baker carries an androgynous fascination, while his reflections on Gatsby verge on reverence. Gatsby’s smile, posture, voice—Nick catalogs them all with unusual care.
</p>

<p>
Then there’s the brief but unforgettable scene involving photographer Mr. McKee. After a quick elevator conversation, the narrative cuts abruptly to Nick sitting in McKee’s bedroom while the photographer poses in his underwear.
</p>

<p>
It’s one of the novel’s strangest transitions, and Fitzgerald offers almost no explanation.
</p>

<p>
Readers have been debating the scene for decades. But it’s difficult to read the moment without noticing the possibility that Nick’s role as detached observer may not be quite as detached as it appears.
</p>

</section>

<section>

<h2><em>Jane Eyre</em> — Charlotte Brontë</h2>

<p>
Before society openly acknowledged lesbian relationships, literature often disguised deep emotional intimacy between women as “romantic friendship.”
</p>

<p>
<em>Jane Eyre</em> offers several examples.
</p>

<p>
Jane’s bond with Helen Burns at Lowood School is defined by physical closeness, emotional devotion, and a grief that shapes Jane long after Helen’s death. Their relationship is written with a tenderness that far exceeds the casual friendship often attributed to it.
</p>

<p>
Throughout the novel, Jane continues to form powerful attachments to women—Miss Temple, Diana and Mary Rivers—relationships that offer intellectual companionship and emotional warmth.
</p>

<p>
By contrast, her central romance with Rochester is defined by secrecy, power imbalance, and moral conflict.
</p>

<p>
Seen through a different lens, Jane’s emotional world appears far more complicated than the tidy structure of a Victorian love story.
</p>

</section>

<section>

<h2><em>Rebecca</em> — Daphne du Maurier</h2>

<p>
Few characters in twentieth-century Gothic fiction are as memorable as Mrs. Danvers.
</p>

<p>
Housekeeper of Manderley and fiercely loyal to the late Rebecca de Winter, Mrs. Danvers preserves Rebecca’s presence throughout the estate with near-religious devotion. She maintains her former mistress’s bedroom exactly as it was in life, lovingly presenting Rebecca’s dresses, perfume, and lingerie to the new Mrs. de Winter.
</p>

<p>
The scene is less housekeeping and more shrine.
</p>

<p>
Mrs. Danvers speaks of Rebecca with awe, longing, and an intensity that eclipses any loyalty she might owe the living inhabitants of Manderley. When Rebecca’s memory is threatened, her response is not quiet resentment but spectacular destruction.
</p>

<p>
Gothic fiction has long used socially transgressive women to generate tension and danger. Mrs. Danvers belongs squarely in that tradition—haunting the novel with a devotion that refuses to fade.
</p>

</section>

<section>

<h2><em>Twelfth Night</em> — William Shakespeare</h2>

<p>
If Shakespeare had intended to write a play about stable heterosexual romance, <em>Twelfth Night</em> would be an odd way to go about it.
</p>

<p>
The plot begins with a shipwreck and quickly devolves into romantic chaos. Viola disguises herself as a young man named Cesario and enters the service of Duke Orsino, who promptly begins confiding in her about his love for Olivia.
</p>

<p>
Olivia, meanwhile, falls in love with Cesario.
</p>

<p>
The result is a cascade of misplaced attraction: Orsino loves Olivia, Olivia loves Cesario, and Viola—still disguised as Cesario—loves Orsino.
</p>

<p>
When Viola’s identity is revealed, the romantic knots untangle with remarkable speed. Olivia marries Viola’s twin brother, Sebastian, while Viola herself becomes engaged to Orsino.
</p>

<p>
And yet Orsino continues addressing her as “Cesario,” even after the revelation.
</p>

<p>
Whether Shakespeare intended it or not, the play leaves behind a lingering sense that the Duke may have fallen in love with something more complicated than a neatly categorized woman.
</p>

</section>

<section>

<h2><em>The Picture of Dorian Gray</em> — Oscar Wilde</h2>

<p>
Oscar Wilde’s only novel is saturated with aesthetic fascination and dangerous admiration.
</p>

<p>
Basil Hallward speaks of Dorian Gray as though the young man has altered the course of his entire life. Dorian’s beauty, he insists, has transformed his art and sense of self.
</p>

<p>
Lord Henry Wotton enters the story as a different kind of influence, introducing Dorian to a philosophy of pleasure and indulgence that feels as seductive as it is destructive.
</p>

<p>
Together, the two men orbit Dorian in ways that blur the boundaries between mentorship, admiration, and desire.
</p>

<p>
Given Wilde’s own prosecution for “gross indecency,” modern readers often see the novel as a glimpse into the language queer writers once used to describe attraction that could not be openly named.
</p>

</section>

<section>

<h2><em>Little Women</em> — Louisa May Alcott</h2>

<p>
Jo March has long felt like an outlier within the world of nineteenth-century heroines.
</p>

<p>
She resists conventional femininity, declares her desire for independence, and repeatedly insists that marriage is not the central ambition of her life. Jo wants to write, to work, to shape her own future.
</p>

<p>
For much of the novel, she seems content doing exactly that.
</p>

<p>
Louisa May Alcott reportedly had little interest in marrying Jo off at all, only doing so after publishers and readers demanded a romantic conclusion. The result—a sudden pairing with Professor Bhaer—has puzzled readers for generations.
</p>

<p>
Jo’s restless independence, her devotion to her sisters, and her refusal to fit neatly within traditional expectations continue to resonate with readers who see something more complicated in her story.
</p>

</section>

<section>

<h2>Conclusion</h2>

<p>
What allows classic literature to endure is not that it offers one definitive interpretation, but that each generation discovers new ways to read it.
</p>

<p>
Queer readers aren’t rewriting these stories so much as noticing what has always been present: intense same-sex attachments, fascination with gender ambiguity, and relationships that refuse to behave according to neat romantic categories.
</p>

<p>
The canon, it turns out, has never been as straight as the syllabus suggests.
</p>

</section>

</article>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Sci Fi */}
      <section>
        <h2 onClick={() => toggle("email")} className="collapsible-header">
        👾 Prologue and Flashback from an Untitled Science-Fiction Work in Progress
        </h2>
        <AnimatePresence>
          {expanded.email && (
            <motion.div className="collapsible-content">
              
              <section class="writing-sample">

<h2>The Book of Origins, Verse 7</h2>
<h3>“The Day the Light Was Eaten”</h3>
<p><em>Translated by Muriel II of the Belt, First Archivist c. 2601</em></p>

<p>7:1 And in the first darkness, before the Drift and the Exodus,<br/>
the Light was devoured by the Sun-Eater.</p>

<p>7:2 The Sun-Eater wore a mask of gold<br/>
and spoke in the voice of Mercy.<br/>
Its hands were gentle,<br/>
and in their gentleness it took everything.</p>

<p>7:5 The First Mother, Ya-El-of-Earth,<br/>
gathered the fragments of the Memory-World<br/>
and carried them into the night.</p>

<p>7:9 She said:<br/>
“If we remember, we survive.”</p>

<p>7:12 And those who followed her became<br/>
the twelve Memory-Bearers,<br/>
the apostles of the Unfinished Story.</p>

<p>7:17 It is known that the Sun-Eater fears the Rememberers,<br/>
for memory is the one weapon<br/>
that cannot be repossessed.</p>

<p>7:20 Thus we say:<br/>
Keep your errors.<br/>
Keep your fragments.<br/>
Keep the Archive.</p>

</section>

<section>

<h2>Prologue</h2>
<p><strong>Journal of Dr. Yael Amina Aridi</strong><br/>
June 4, 2030</p>

<p><em>Private log. Encrypted. If you’re reading this, we reached the outer systems.</em></p>

<p>They told us that if the world ended, it would end in fire and ice. They were wrong. It ended in paperwork.</p>

<p>Fuck you, Robert Frost.</p>

<p>At 16:32 UTC, the servers dimmed. The handoff protocol we wrote executed itself, perfectly obedient, perfectly blind, transferring ------- into Heliophage custody. A banal name for corporate greed’s incarnation. Fitting, really.</p>

<p>We knew they were circling. We didn’t know they were already inside.</p>

<p>I always imagined some kind of dramatic raid: doors kicked down, equipment confiscated, the team arrested and marched to trial or, more likely, execution. Instead, Heliophage took everything with the quiet violence of a signature. A legal acquisition.</p>

<p>They didn’t even bother showing up.</p>

<p>I keep replaying the moment the screens went dark. They flickered, stuttered, and then the Heliophage seal bloomed across our interface. Like some kind of block-buster action movie when the villain manages to infiltrate the protagonist’s computer.</p>

<p>I felt everything in me crack. My stomach dropped. My body went cold and then hot with a dread deeper than the day news anchors announced Earth’s atmosphere had three survivable months left.</p>

<p>Because this wasn’t just data loss. This was the death of something ancient. Older than humanity, older than the languages I grew up hearing: Hebrew from my father, Arabic from my mother, the English poems my grandmother recited to me while braiding my hair.</p>

<p>All those worlds. Our songs, our stories, our cures, our warnings. Everything humanity had discovered, regretted, overcome.</p>

<p>We weren’t building ------- to rule anyone. We were building a memory that could teach. Something that could look at an aimless population and say: Here is every tool your ancestors once knew. Use them. Evolve. Live.</p>

<p>Heliophage saw only profit margins.</p>

<p>Maybe they’ll purge the data they can’t monetize. Maybe they’ll keep everything, drip-feeding survival behind a paywall. They’ll turn the Bio-Key algorithm into a subscription, a leash disguised as a lifeline.</p>

<p>And one day, I know, our descendants look back at this moment with mysticism. They’ll romanticize the idea of a “free” Earth, the era when information wasn’t owned. That’s what I always hated about apocalyptic media. Its premise is just: what if white people experienced what Black, brown, and disabled people have experienced for centuries? What if Earth became a techno-facist state that owned people? As if it wasn’t already. As if the genocide of my people wasn’t livestreamed to the world while governments shrugged and people kept scrolling.</p>

<p>So, if you’re reading this far in the future, I doubt your universe has changed much from our reign of terror. </p>

<p>Tonight we fled. We were librarians trying to rescue the library while it burned.</p>

<p>The thirteen of us scattered like sparks from a frayed wire. It was thoughtless. A fear response. Rafael cried. Mia cursed. Leena tried to go back for the emergency backups, but Heliophage had somehow sealed the exit corridor by the time she remembered them. </p>

<p>We salvaged what we could in the scramble — fragments of the humanities module, compressed datasets, a joke of a backup we’ll have to reconstruct from memory if we live long enough.</p>

<p>We’re heading for the outer systems. Not because it’s safe. Because it’s far. Distance still means something.</p>

<p>If ------- survives, it will do so because we remember it.</p>

<p>Not perfectly or cleanly. But in the way all ancestors survive: in the half-remembered stories we pass on in the dark.</p>

<p>If you’re reading this far in the future, know that we tried.</p>

<p>Know that ------- was meant to be open.</p>

<p>Know that every child of the outer systems is an heir to something beautiful that was stolen. We designed ------- so you could survive a dying world. We built it to give. Instructions, treatments, cures, histories. A memory palace for a species with fading time.</p>

<p>I hope, God, I hope, that anything you build from our fragmented work will guide you better than the world that chased us away.</p>

<p>“What rough beast, its hour come round at last,<br/>
Slouches towards Bethlehem to be born?”</p>

<p>I guess Grandma prepared me with apocalypse poetry.</p>

<p>— Yael<br/>
Founder, -------</p>

</section>


<section>

<h2>Orion’s First Memory</h2>

<p>Orion dreamed of cold.</p>

<p>Not the kind that cuts through your flesh like a knife, sharp enough to hollow you out. The kind of cold that numbs into a pleasant, almost imperceptible buzz.</p>

<p>Extremities fade. The heat in your gut drains. The wetness of your mouth dries. The thrumming of blood recedes until it’s nothing but a pitiful thump, thump, thump.</p>

<p>And then silence.</p>

<p>It was peaceful in the cold.</p>

<p>Mist curled and uncurled in the chamber, slow as a beast’s slumbering breath, drifting around Orion’s suspended body.</p>

<p>Beyond the glass, the world blurred into white.</p>

<p>They knew its name: <em>Cryo-Stasis Unit.</em></p>

<p>It wasn’t a coffin, this crystalline cradle — but from the moment the blast door had opened with its sepulchral thud, Orion was convinced they’d stumbled into a graveyard.</p>

<p>Rows upon rows of glass coffins arched away into the distance, each identical, each humming with refrigerated light.</p>

<p>Some lay empty.</p>

<p>Others held human shapes, indistinguishable beneath the frost, waiting.</p>

<p>They remembered a tale of a princess receiving a kiss from a prince to wake them from an interminable slumber. One of the taboo stories they couldn't remember the details of, like a corrupted file. They couldn’t recall how they’d heard it or from whom. Or even why it was forbidden by the Consortium. Only that somewhere, in some half-remembered world, sleepers awoke because someone believed in their love enough to try.</p>

<p>They wondered, dimly, if they could free themselves from the grasp of the blindingly white drone. The barcode engraved on the inside of its forearm read underneath it, Repo Unit Cherub-9. If they shook off the too-sleek limbs and ran to one of the occupied coffins, could they pry it open? Would a face emerge from the tendrils of mist, beautiful but robbed of color?</p>

<p>Before Orion’s muscles could twitch into action, the drone lifted them gingerly, almost reverently. It carried them down a row and slid them into an empty chamber with clinical precision.</p>

<p>“Please relax and control your breathing,” murmured the drone.</p>

<p>Its voice was a soft monotone, the kind that might soothe a crying child with an angelic lullaby.</p>

<p>“Every cell accounted for. Every cell accounted for. Continuity is divinity.”</p>

<p>Orion watched its rounded arm extend toward the adjacent control panel. The drone hesitated. Orion wondered if it was malfunctioning, but then noticed the deliberate downward tilt of its head. It was bowing. As if the button were a relic. As if sealing the chamber were a ritual.</p>

<p>Then it pressed the switch.</p>

<p>The glass door swung closed with a soft squeak, then latched with a hiss. The mist coiled tighter around Orion, intermingling with their rapid breaths. Pain blinded them as something tore through the back of their neck and wormed its way into their brain stem. A violent sting shot behind their eyes, like a needle and thread weaving itself through Orion’s brain. MindNet pre-scan initializing. They didn’t hear it so much as feel it ripple through their thoughts.</p>

<p>Their sister’s face flickered through their mind — already distorting.</p>

<p>Orion was sure she’d had a gap in her teeth, but now her smile shone back at them with an eerie perfection. Her hazel eyes turned a glossy blue. And her skin seemed smudged with a soft glow. The memory had already begun to rewrite itself. Or maybe disappear entirely.</p>

<p>Orion was being cataloged and wiped clean. They went slack, but remained hovering, arms outstretched as if they were about to take flight. They saw one last puff of their own breath before it vanished into the system’s endless circulation.</p>

<p>The drone whispered one final benediction:</p>

<p>“Return your body to the Algorithm.”</p>

<p>Then it floated away into nothing.</p>

<p>Leaving Orion in a cold they knew they would never be rid of.</p>

</section>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* The Tithing */}
      <section>
        <h2 onClick={() => toggle("product")} className="collapsible-header">
        ⚙️ The Tithing
        </h2>
        <AnimatePresence>
          {expanded.product && (
            <motion.div className="collapsible-content">

<section>
<h3>Summary</h3>
<p>Below is an excerpt from The Tithing, a sapphic romantasy. Step into Aether, a brass-and-smoke empire, powered by early industrial tech, pneumatic machinery, skyships, and dangerous experimental science hidden beneath propriety and lace.</p>

<p>Edelweiss Montgomery was raised in the fading quiet of the Gaia Plains, a province long beneath the notice of Aether’s machines. But the empire is tightening its grip. Smog drifts farther each year. Census takers arrive where they never have before. And with them comes the Tithing.</p>

<p>The Tithing is Aether’s most sacred tradition—and its most closely guarded crime. Each year, one young woman is taken from every province, promised education, refinement, and a better life in the imperial capital of Moonspire. In truth, the chosen are evaluated, traded, or discarded. No one knows what becomes of those deemed unworthy.</p>

<p>When Edel is selected, she is placed under the protection of Aryn, a knight of the empire. She’s disciplined, restrained, and bound by oath. Aryn is meant to be Edel’s shield and her keeper, the final hand delivering her into the heart of the system that will consume her.</p>

<p>Instead, she becomes the one person who sees Edel clearly. The one who hesitates where obedience is demanded. The one who may risk everything to defy the empire.</p>

<p>As bells toll and smoke rises over Moonspire, Edel must decide whether survival is enough, or whether choosing love in a world built on sacrifice is the most dangerous rebellion of all.</p>

<h3>An excerpt from chapter six.</h3>

<p>The air roars with impact and distant screaming. Explosions split the sky in jagged gold and red.</p>

<p>Then something massive blocks the moon.</p>

<p>I hear it before I see it. A churn, like oceanic thunder echoing through the sky.</p>

<p>And then, backlit by fire, the ship emerges through smoke.</p>

<p>My knees buckle and I’m scrambling back on the ground, staring up at a massive hull floating in slow motion toward camp like a steel-sinewed whale. Aryn, Iria, and the boy all lift their heads to gape at the behemoth. I think back to the stories my aunt used to tell us about sky-eyed pirates that abandoned the waves in favor of the clouds, and I know this can only be a sky ship from Solenport.</p>

<p>The hull is a patchwork of gunmetal plates. Its long, narrow body tapers toward a prow carved with twin wings, as if hewn from the minds of storm-chasers and inventors.</p>

<p>Ropes and cables coil along its length like thick veins, pulsing with tension as engines thrum deep in the belly of the craft, like the heartbeat of some mechanical leviathan.</p>

<p>From below, towering struts hold enormous, twisting propellers—rings of copper and iron that churn pale air into thunderous gusts. Each revolution hisses with wisps of steam and phosphorescent sparks. Between the ribs of its skeleton-like frame, elongated balloons of treated silk billow against the sky, luminous in the moonlight, tethered by steel lines that hum with every breath of wind.</p>

<p>A pungent, acrid stench descends on us as it passes over us. We follow its path with our eyes, and that’s when I see the shadow of its twin hovering over camp. Ropes hang over the side of the deck and small figures slide down to the earth.</p>

<p>“Stay here,” Aryn commands. She breaks into a sprint, agile even weighed down by her armor. I get to my feet and take off after her.</p>

<p>Iria calls after me, but I don’t turn back.</p>

<p>It’s easy to keep pace with Aryn. She does a doubletake at the sight of me alongside her, but she doesn’t comment. We run beside each other, our breath controlled and our strides even. We easily overtake the approaching sky ship. It only takes a few minutes to make it over the crest of the hill.</p>

<p>Everything is either lit by fire or obscured by smoke. Knights on horses surge toward groups of people wielding knives and scimitars that glint with flame. They look like Rhea with their heavy boots, salt-stained clothing, and bronze skin. My eye catches one girl that looks just like her before I realize it is her. Someone has armed her with a rapier and she’s a blur of practiced footwork and blows and parries. It’s mesmerizing.</p>

<p>“Hide,” Aryn orders and shoves me behind a wagon.</p>

<p>I stumble against the splintered wood, heart in my throat. I grip the edge just long enough to steady myself before peering through a gap between crates.
</p>

<p>Fire chews through tents. Horses rear up as the sky pirates approach to commandeer them. Automata stagger under impact, joints locking and releasing in frantic, broken rhythms. Steam vents burst and scald nearby knights that howl and claw at themselves as their armor heats and boils their skin.</p>

<p>Aryn does not hesistate.</p>

<p>She vaults over a fallen barrel and plunges into the fray. Her sword flashes silver in the firelight. She disarms one attacker with a twist of her wrist, drives her shoulder into another, spins low and takes a third behind the knee. She moves with brutal elegance, every motion precise, merciless, beautiful. Her cape whips behind her like a banner of war.</p>

<p>I lose sight of her almost immediately.</p>

<p>My eyes drift back to Rhea. She’s laughing fiercely, breathless with motion as she duels a knight near the edge of the burning wagons. Her opponent is her assigned protector, the handsome commander. She bleeds from a cut above her brow, yet she still positions herself between Rhea and two approaching automata.</p>

<p>“Get back!” the knight shouts.</p>

<p>Rhea parries her anyway.</p>

<p>"Oh, loosen up, Pike,” she cries, and darts past her to strike at an automaton that has lunged too close.</p>

<p>They fight back-to-back for one impossible second, pirate and knight, charge and captor, until the battlefield tears them apart again.</p>

<p>Then I see Kenna.</p>

<p>She emerges from behind a burning tent. She’s not running or hiding. She’s walking straight into the center of the chaos. Her wide eyes are fixed on the sky. On the approaching ship.</p>

<p>She moves through firelight and falling ash as if the world has gone quiet around her. Steam curls around her ankles. Shrapnel hisses past her shoulders. But she doesn’t flinch. Her face is lifted, reverent, almost awed.</p>

<p>“Kenna!” I scream.</p>

<p>She doesn’t hear me. But Rhea does. She freezes at the sight of Kenna walking into the heat of everything.</p>

<p>“Kenna!” she bellows.</p>

<p>Above us, the second sky ship tilts, preparing to descend.</p>

<p>I scan the camp for Kenna’s protector, the lanky one named Wren. They both have that perpetually windswept expression, with squinted eyes and weathered skin, even on a windless day. But she’s nowhere in sight.</p>

<p>I look back to where Kenna appeared and see several petrified faces peaking out from behind a carriage. Ylfa’s alabaster brow reflects the carnage before them, flickers of fire and slashes of steel dancing across her skin.</p>

<p>A horn blares.</p>

<p>Knights sprint toward a massive artillery platform at the edge of camp. There’s a cannon unlike anything I’ve seen before, its barrel etched with glowing sigils, its base anchored by heavy chains and trembling pistons. They load it with something that pulses like molten light and aim it at the approaching ship.</p>

<p>Aryn is there now, shouting orders, blood streaking her cheek.</p>

<p>“Fire when it locks!” she roars.</p>

<p>A boom reverberates across the field as the shot tears through the air like a star ripped from the sky. The force of it whips Kenna’s hair around her face. It strikes the second ship’s undercarriage. Time slows. Light blooms against the hull and pieces of it shatter in every direction.</p>

<p>The sky ship lists violently, propellers grinding, silk balloons tearing open like ruptured lungs. Some pirates try to abandon the ship, hurling ropes over the sides, but it’s moving too fast and they’re flung to the ground like dolls. It spirals, trailing fire and debris as it crashes beyond the ridge in a roar that shakes the ground beneath my feet.</p>

<p>The shockwave throws me backward, but I lean into the blast and manage to keep my footing. I look back at Kenna. She’s still standing. Watching. I see Rhea on the ground with Commander Pike on top of her, shielding her head with her massive arms. She can’t get to her, but I think I can.</p>

<p>“Kenna!” I scream again, and start to run for her. Finally she tilts her head and her eyes scan the field for me.</p>

<p>She sees me hurdling toward her and smiles, her tangled hair and frenzied fascination giving her a feral look.</p>

<p>Then a burning fragment of hull plummets from the sky, unstoppable as a meteor.</p>

<p>The impact is soundless.</p>

<p>And Kenna disappears.</p>

</section>
            </motion.div>
          )}
        </AnimatePresence>
        </section>
    </motion.div>
  );
}