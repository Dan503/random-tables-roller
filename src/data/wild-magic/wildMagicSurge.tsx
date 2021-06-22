interface SurgeProps {
	good: JSX.Element
	bad: JSX.Element
	neutral: JSX.Element
}

const Surge = ({ good, bad, neutral }: SurgeProps) => (
	<>
		<p>
			<strong>1-5 (Bad):</strong>
		</p>{' '}
		<p>{bad}</p>
		<p>
			<strong>6-15 (Neutral):</strong>
		</p>{' '}
		<p>{neutral}</p>
		<p>
			<strong>16-20 (Good):</strong>
		</p>{' '}
		<p>{good}</p>
	</>
)

export const wildMagicSurge = [
	<Surge
		good={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into an{' '}
				<a href="https://www.dndbeyond.com/monsters/adult-white-dragon">
					Adult White Dragon
				</a>
				. You don't return to your normal form until 24 hours have elapsed or
				your HP drops to 0.
			</>
		}
		neutral={
			<>
				You turn into an white dragonborn and can only speak draconic and barely
				understand common for 24 hours.
			</>
		}
		bad={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into a primal rage filled{' '}
				<a href="https://www.dndbeyond.com/monsters/adult-white-dragon">
					Adult White Dragon
				</a>
				. You attack the nearest creature to you (including allies) every turn
				for as long as you are berserk. Make a DC 18 WIS save at the start of
				each of your turns to gain control over yourself, losing berserk. You
				don't return to your normal form until 24 hours have elapsed or your HP
				drops to 0.
			</>
		}
	/>,
	<Surge
		good={
			<>
				A talking ethereal{' '}
				<a href="https://www.dndbeyond.com/monsters/dire-wolf">Dire Wolf</a>{' '}
				animal companion appears. You can summon, dismiss or command this
				creature using a bonus action. The creature disappears, never to return,
				when it reaches 0 HP.
			</>
		}
		neutral={
			<>
				A talking spectral{' '}
				<a href="https://www.dndbeyond.com/monsters/wolf">dog</a> that only you
				can see appears.
			</>
		}
		bad={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into a dog.
			</>
		}
	/>,
	<Surge
		good={
			<>
				Gain the druid{' '}
				<a href="https://www.dndbeyond.com/sources/phb/classes#WildShape">
					Wild Shape
				</a>{' '}
				feature for 24 hours.
			</>
		}
		neutral={
			<>
				You take on properties of an arctic creature (roll on the creature roll
				table) for 24 hours.
			</>
		}
		bad={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into a CR 0 creature (see Chawinga Charms "Charm of Animal Conjuring"
				roll table result).
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, gain resistance to cold damage. You also grow gills on the
				side of your neck allowing you to breath underwater.
			</>
		}
		neutral={
			<>
				For 24 hours, you turn into a
				<a href="https://www.dndbeyond.com/monsters/deep-scion">Deep Scion</a>{' '}
				with resistance to cold damage.
			</>
		}
		bad={
			<>
				For 24 hours, you turn into a{' '}
				<a href="https://www.dndbeyond.com/monsters/troglodyte">Troglodyte</a>.
				Your stench aura extends out to 20ft.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you gain +2 AC as large segments of your skin turns into a
				hardened metal. Your body weight doubles but this does not effect
				encumbrance.
			</>
		}
		neutral={<>For 24 hours, the appearance of your skin looks metallic.</>}
		bad={
			<>
				For 24 hours, you transform into a metal statue of yourself, during
				which time you are considered petrified.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you grow black raven wings out of your back and gain a fly
				speed of 40ft.
			</>
		}
		neutral={<>For 24 hours, you grow black feathers all over your body.</>}
		bad={
			<>
				You Polymorph into a{' '}
				<a href="https://www.dndbeyond.com/monsters/raven">Raven</a>
			</>
		}
	/>,
	<Surge
		good={
			<>
				3d6 x 100 silver pieces appear randomly around you over the next hour.
			</>
		}
		neutral={
			<>
				For 24 hours, every non living thing that you touch directly with your
				skin turns to gold. It turns back to normal when your ability expires.
			</>
		}
		bad={
			<>
				For 24 hours, everything you touch directly with your skin (including
				living creatures) turns to rusted copper. It turns back to normal when
				your ability expires. Living things that are transformed are considered
				petrified.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you grow gills on your neck allowing you to breath under
				water. You also gain resistance to cold damage.
			</>
		}
		neutral={
			<>
				For 24 hours, you grow gills on your neck allowing you to breath under
				water.
			</>
		}
		bad={
			<>
				For 24 hours, you grow gills on your neck allowing you to breath under
				water. However you are no longer able to breath air for as long as you
				have these gills. You have resistance to cold damage while underwater.
			</>
		}
	/>,
	<Surge
		good={
			<>
				You trigger the effects of the{' '}
				<a href="https://www.dndbeyond.com/spells/time-stop">Time Stop</a> Spell
			</>
		}
		neutral={
			<>
				For 24 hours, every so often you will freeze in place for a few seconds
				as if frozen in time... no mechanics to this, just RP.
			</>
		}
		bad={
			<>
				You are frozen in time (stunned), make a DC 18 WIS save every round
				until you succeed to unfreeze yourself.
			</>
		}
	/>,
	<Surge
		good={
			<>
				You grow thick calusses all over your body. For 24 hours, you have
				resistance to slashing and piercing damage.
			</>
		}
		neutral={
			<>
				For 24 hours, your skin thickens and you gain the “Unarmored Defense
				Feat”. If you already have this, then increase AC by +1.
			</>
		}
		bad={
			<>
				Your skin thins. For 24 hours, you are vulnerable to slashing and
				piercing damage.
			</>
		}
	/>,
]
