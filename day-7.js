// --- Day 7: The Treachery of Whales ---
// A giant whale has decided your submarine is its next meal, and it's much faster than you are. There's nowhere to run!

// Suddenly, a swarm of crabs (each in its own tiny submarine - it's too deep for them otherwise) zooms in to rescue you! They seem to be preparing to blast a hole in the ocean floor; sensors indicate a massive underground cave system just beyond where they're aiming!

// The crab submarines all need to be aligned before they'll have enough power to blast a large enough hole for your submarine to get through. However, it doesn't look like they'll be aligned before the whale catches you! Maybe you can help?

// There's one major catch - crab submarines can only move horizontally.

// You quickly make a list of the horizontal position of each crab (your puzzle input). Crab submarines have limited fuel, so you need to find a way to make all of their horizontal positions match while requiring them to spend as little fuel as possible.

// For example, consider the following horizontal positions:

// 16,1,2,0,4,2,7,1,2,14
// This means there's a crab with horizontal position 16, a crab with horizontal position 1, and so on.

// Each change of 1 step in horizontal position of a single crab costs 1 fuel. You could choose any horizontal position to align them all on, but the one that costs the least fuel is horizontal position 2:

// Move from 16 to 2: 14 fuel
// Move from 1 to 2: 1 fuel
// Move from 2 to 2: 0 fuel
// Move from 0 to 2: 2 fuel
// Move from 4 to 2: 2 fuel
// Move from 2 to 2: 0 fuel
// Move from 7 to 2: 5 fuel
// Move from 1 to 2: 1 fuel
// Move from 2 to 2: 0 fuel
// Move from 14 to 2: 12 fuel
// This costs a total of 37 fuel. This is the cheapest possible outcome; more expensive outcomes include aligning at position 1 (41 fuel), position 3 (39 fuel), or position 10 (71 fuel).

// Determine the horizontal position that the crabs can align to using the least fuel possible. How much fuel must they spend to align to that position?

// Your puzzle answer was 337833.

// --- Part Two ---
// The crabs don't seem interested in your proposed solution. Perhaps you misunderstand crab engineering?

// As it turns out, crab submarine engines don't burn fuel at a constant rate. Instead, each change of 1 step in horizontal position costs 1 more unit of fuel than the last: the first step costs 1, the second step costs 2, the third step costs 3, and so on.

// As each crab moves, moving further becomes more expensive. This changes the best horizontal position to align them all on; in the example above, this becomes 5:

// Move from 16 to 5: 66 fuel
// Move from 1 to 5: 10 fuel
// Move from 2 to 5: 6 fuel
// Move from 0 to 5: 15 fuel
// Move from 4 to 5: 1 fuel
// Move from 2 to 5: 6 fuel
// Move from 7 to 5: 3 fuel
// Move from 1 to 5: 10 fuel
// Move from 2 to 5: 6 fuel
// Move from 14 to 5: 45 fuel
// This costs a total of 168 fuel. This is the new cheapest possible outcome; the old alignment position (2) now costs 206 fuel instead.

// Determine the horizontal position that the crabs can align to using the least fuel possible so they can make you an escape route! How much fuel must they spend to align to that position?

// Your puzzle answer was 96678050.

// Both parts of this puzzle are complete! They provide two gold stars: **


// Solutions: 


// #1


// #2


const input = [1101,1,29,67,1102,0,1,65,1008,65,35,66,1005,66,28,1,67,65,20,4,0,1001,65,1,65,1106,0,8,99,35,67,101,99,105,32,110,39,101,115,116,32,112,97,115,32,117,110,101,32,105,110,116,99,111,100,101,32,112,114,111,103,114,97,109,10,106,684,36,657,427,156,197,56,205,1104,170,307,291,88,330,12,24,1128,440,1099,1523,936,198,266,1257,874,196,912,335,46,320,666,132,1035,145,877,1484,222,690,479,386,59,101,765,506,27,250,478,609,807,1566,317,138,1390,245,1178,211,64,714,510,256,430,371,182,464,398,1749,57,1023,4,891,1177,459,171,236,1,34,106,744,1766,51,8,256,571,290,462,852,56,372,612,2,688,33,452,1182,739,696,123,469,583,77,40,191,416,1470,1153,459,848,228,677,1203,8,70,1302,207,21,913,9,855,47,81,188,354,700,1169,1199,620,197,41,138,1825,466,387,1124,595,457,1231,3,61,292,120,98,846,893,97,142,673,429,797,139,193,83,586,1726,201,365,415,63,525,277,335,1347,304,995,378,1884,185,331,69,351,134,972,262,208,21,108,1385,143,264,287,625,657,90,345,578,569,280,604,335,453,773,39,79,13,431,245,760,433,167,608,409,655,796,611,45,1167,312,439,1106,420,365,431,169,147,567,20,401,699,356,56,35,1233,975,105,29,787,618,404,179,469,284,304,140,50,283,774,957,455,1651,1,308,936,502,313,218,62,51,1,255,224,64,299,546,4,23,100,868,641,331,1810,399,272,105,156,1031,894,783,775,1823,211,209,1375,64,897,1083,367,14,516,311,86,50,716,1671,515,755,83,490,386,1015,359,620,192,921,1257,606,853,1196,1304,92,1442,89,33,689,832,139,308,140,424,300,97,67,1102,138,1166,753,53,274,236,245,567,205,368,1108,253,893,151,211,736,194,779,344,152,533,869,849,259,794,93,1092,301,51,350,909,499,349,242,1014,55,813,613,75,211,1039,1310,626,1440,381,904,25,1625,491,54,584,465,79,1146,60,476,476,111,1350,721,283,1102,276,41,1111,221,890,223,639,571,346,150,399,400,140,720,0,196,128,1125,610,339,1034,490,979,1328,32,505,567,92,76,377,239,62,12,19,1265,857,182,781,834,682,802,201,313,20,165,71,21,108,961,1190,1257,434,1223,208,488,93,19,96,29,205,264,1586,142,818,569,42,79,475,42,1079,303,117,1569,4,422,750,142,454,116,3,1628,933,1408,274,200,393,544,717,382,65,53,522,71,842,971,1288,128,590,46,882,1568,811,134,23,6,562,450,43,821,96,12,771,23,232,720,134,188,1394,4,1365,134,44,1896,1,194,83,474,101,11,429,309,825,80,322,295,1009,142,198,58,13,647,334,382,334,1364,106,206,479,282,683,379,86,381,1407,146,1470,93,465,588,110,750,1118,744,171,103,594,79,1075,0,501,63,792,293,18,1316,1510,143,406,344,453,28,341,178,11,76,1366,1085,32,1536,1722,190,17,378,166,531,818,921,211,130,171,689,170,478,278,587,335,135,652,41,155,715,109,144,867,847,1072,335,537,50,94,168,51,327,78,182,372,115,70,798,473,470,523,271,1028,1048,607,469,40,91,1064,209,1759,38,994,781,602,80,31,387,356,494,373,44,10,379,62,174,96,1628,875,911,6,692,502,161,329,595,368,1697,42,179,987,65,1091,343,657,84,184,98,926,208,728,698,269,165,99,856,410,167,339,884,258,502,50,158,252,331,1653,107,32,382,1140,105,19,1433,32,827,5,826,1,1000,95,562,153,431,158,550,39,294,91,95,165,8,51,243,1087,1290,597,688,839,332,61,41,321,11,217,150,1282,596,577,590,398,383,1875,88,111,1357,315,28,1344,179,1072,161,613,393,222,421,492,445,1090,234,154,78,440,856,492,1517,351,1162,48,220,8,72,597,350,127,562,1510,488,177,547,32,82,111,47,0,137,264,14,327,46,908,505,518,30,866,16,315,58,708,1776,233,604,1364,630,215,1684,1949,628,118,626,33,150,4,1183,533,50,501,942,43,345,52,473,684,69,608,32,38,992,6,751,1106,523,93,418,297,608,378,1846,32,597,1341,89,412,552,265,143,164,113,48,1181,1352,1066,1128,686,670,639,159,177,120,761,632,129,7,1098,623,2,442,276,595,39,314,959,114,1990,235,1025,50,1547,196,23,476,822,365,430,31,759,2,95,27,615,395,814,131,63,79,503,248,261,40,369,1673,53,130,910,573,28,237,1073,133,107,509,222,1517,441,528,727,408,234,216,549,7,345,1557,1194,372,271,219,268,243,478,253,2,209,278,1200,1272,779,8,161,417,263,131,798,791,58,566,464,1109,370,448,1166,452,1248,379,848,1212,280,444,139,145]

// Arithmetic Progression
const incSum = num => {
	return num * (num + 1) / 2
}

const part1 = (arr) => {
	const max = Math.max(...arr)
	let sum = Infinity

	for (let i = 0; i <= max; i++) {
		let temp = 0

		for (let j = 0; j < arr.length; j++) {
			temp += Math.abs(arr[j] - i)
		}

		if (sum > temp) sum = temp
	}

	return sum
}

const part2 = (arr) => {
	const max = Math.max(...arr)
	let sum = Infinity

	for (let i = 0; i <= max; i++) {
		let temp = 0

		for (let j = 0; j < arr.length; j++) {
			let num = Math.abs(arr[j] - i)

			temp += incSum(num)
		}

		if (sum > temp) sum = temp
	}

	return sum
}