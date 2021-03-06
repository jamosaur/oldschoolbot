import itemID from '../../../../util/itemID';
import { Fletchable } from '../../../types';
import { resolveNameBank } from '../../../../util';

const TippedBolts: Fletchable[] = [
	{
		name: 'Opal bolts',
		id: itemID('Opal bolts'),
		level: 11,
		xp: 1.6,
		inputItems: resolveNameBank({ 'Opal bolt tips': 1, 'Bronze bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Pearl bolts',
		id: itemID('Pearl bolts'),
		level: 41,
		xp: 3.2,
		inputItems: resolveNameBank({ 'Pearl bolt tips': 1, 'Iron bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Topaz bolts',
		id: itemID('Topaz bolts'),
		level: 48,
		xp: 4,
		inputItems: resolveNameBank({ 'Topaz bolt tips': 1, 'Steel bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Sapphire bolts',
		id: itemID('Sapphire bolts'),
		level: 56,
		xp: 4.7,
		inputItems: resolveNameBank({ 'Sapphire bolt tips': 1, 'Mithril bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Emerald bolts',
		id: itemID('Emerald bolts'),
		level: 58,
		xp: 5.5,
		inputItems: resolveNameBank({ 'Emerald bolt tips': 1, 'Mithril bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Ruby bolts',
		id: itemID('Ruby bolts'),
		level: 63,
		xp: 6.3,
		inputItems: resolveNameBank({ 'Ruby bolt tips': 1, 'Adamant bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Diamond bolts',
		id: itemID('Diamond bolts'),
		level: 65,
		xp: 7,
		inputItems: resolveNameBank({ 'Diamond bolt tips': 1, 'Adamant bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Dragonstone bolts',
		id: itemID('Dragonstone bolts'),
		level: 71,
		xp: 8.2,
		inputItems: resolveNameBank({ 'Dragonstone bolt tips': 1, 'Runite bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Onyx bolts',
		id: itemID('Onyx bolts'),
		level: 73,
		xp: 9.4,
		inputItems: resolveNameBank({ 'Onyx bolt tips': 1, 'Runite bolts': 1 }),
		tickRate: 0.2
	},
	{
		name: 'Amethyst broad bolts',
		id: itemID('Amethyst broad bolts'),
		level: 76,
		xp: 10.6,
		inputItems: resolveNameBank({ 'Amethyst bolt tips': 1, 'Broad bolts': 1 }),
		tickRate: 0.2
	}
];

export default TippedBolts;
