// --- Day 5: Hydrothermal Venture ---
// You come across a field of hydrothermal vents on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.

// They tend to form in lines; the submarine helpfully produces a list of nearby lines of vents (your puzzle input) for you to review. For example:

// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2
// Each line of vents is given as a line segment in the format x1,y1 -> x2,y2 where x1,y1 are the coordinates of one end the line segment and x2,y2 are the coordinates of the other end. These line segments include the points at both ends. In other words:

// An entry like 1,1 -> 1,3 covers points 1,1, 1,2, and 1,3.
// An entry like 9,7 -> 7,7 covers points 9,7, 8,7, and 7,7.
// For now, only consider horizontal and vertical lines: lines where either x1 = x2 or y1 = y2.

// So, the horizontal and vertical lines from the above list would produce the following diagram:

// .......1..
// ..1....1..
// ..1....1..
// .......1..
// .112111211
// ..........
// ..........
// ..........
// ..........
// 222111....
// In this diagram, the top left corner is 0,0 and the bottom right corner is 9,9. Each position is shown as the number of lines which cover that point or . if no line covers that point. The top-left pair of 1s, for example, comes from 2,2 -> 2,1; the very bottom row is formed by the overlapping lines 0,9 -> 5,9 and 0,9 -> 2,9.

// To avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a 2 or larger - a total of 5 points.

// Consider only horizontal and vertical lines. At how many points do at least two lines overlap?

// Your puzzle answer was 5373.

// --- Part Two ---
// Unfortunately, considering only horizontal and vertical lines doesn't give you the full picture; you need to also consider diagonal lines.

// Because of the limits of the hydrothermal vent mapping system, the lines in your list will only ever be horizontal, vertical, or a diagonal line at exactly 45 degrees. In other words:

// An entry like 1,1 -> 3,3 covers points 1,1, 2,2, and 3,3.
// An entry like 9,7 -> 7,9 covers points 9,7, 8,8, and 7,9.
// Considering all lines from the above example would now produce the following diagram:

// 1.1....11.
// .111...2..
// ..2.1.111.
// ...1.2.2..
// .112313211
// ...1.2....
// ..1...1...
// .1.....1..
// 1.......1.
// 222111....
// You still need to determine the number of points where at least two lines overlap. In the above example, this is still anywhere in the diagram with a 2 or larger - now a total of 12 points.

// Consider all of the lines. At how many points do at least two lines overlap?

// Your puzzle answer was 21514.

// Both parts of this puzzle are complete! They provide two gold stars: **


// Solutions^
let input = `580,438 -> 580,817:
220,987 -> 199,966:
300,674 -> 300,523:
27,362 -> 27,932:
890,430 -> 854,430:
488,202 -> 488,885:
824,930 -> 824,740:
208,756 -> 851,113:
967,288 -> 967,960:
700,139 -> 531,139:
671,463 -> 671,150:
270,954 -> 270,801:
682,718 -> 682,146:
849,837 -> 353,341:
779,635 -> 420,635:
228,872 -> 228,419:
34,76 -> 745,787:
180,548 -> 180,969:
429,668 -> 445,652:
601,11 -> 893,11:
400,314 -> 128,586:
120,80 -> 972,932:
133,144 -> 969,980:
987,15 -> 106,896:
940,676 -> 940,322:
471,490 -> 900,490:
884,847 -> 64,27:
327,168 -> 327,948:
878,826 -> 463,411:
950,196 -> 161,985:
226,897 -> 234,889:
314,475 -> 698,475:
947,27 -> 72,902:
19,933 -> 936,16:
15,101 -> 335,101:
142,321 -> 781,321:
248,586 -> 130,586:
312,967 -> 565,714:
955,973 -> 63,81:
640,798 -> 153,798:
24,711 -> 147,711:
601,118 -> 601,712:
32,461 -> 32,275:
334,309 -> 43,309:
92,297 -> 92,30:
209,363 -> 799,953:
765,630 -> 892,630:
974,140 -> 127,987:
41,300 -> 606,300:
769,646 -> 149,26:
229,348 -> 379,348:
694,789 -> 423,518:
196,489 -> 842,489:
941,238 -> 206,238:
969,989 -> 132,152:
742,28 -> 402,28:
632,776 -> 399,543:
150,583 -> 444,877:
365,686 -> 365,401:
925,539 -> 925,366:
488,799 -> 488,637:
799,913 -> 512,626:
681,123 -> 626,68:
515,508 -> 515,568:
513,630 -> 823,630:
633,773 -> 244,384:
315,686 -> 315,131:
351,815 -> 351,965:
837,281 -> 186,932:
204,663 -> 179,663:
147,949 -> 647,449:
60,12 -> 928,880:
644,436 -> 644,635:
716,192 -> 916,192:
440,141 -> 440,560:
529,971 -> 752,971:
433,296 -> 148,581:
250,228 -> 348,228:
245,760 -> 631,760:
328,767 -> 558,767:
103,626 -> 937,626:
141,953 -> 913,181:
716,392 -> 389,65:
751,543 -> 751,763:
182,51 -> 623,492:
549,416 -> 907,58:
285,533 -> 690,533:
567,521 -> 567,227:
894,849 -> 69,24:
14,52 -> 911,949:
11,67 -> 887,943:
205,47 -> 820,47:
823,738 -> 823,833:
378,268 -> 378,531:
364,908 -> 874,398:
317,478 -> 317,265:
481,943 -> 867,557:
521,954 -> 929,954:
960,25 -> 27,958:
930,392 -> 175,392:
22,884 -> 853,53:
505,839 -> 624,720:
756,351 -> 737,351:
417,763 -> 417,167:
151,73 -> 151,51:
132,492 -> 567,57:
100,366 -> 942,366:
514,644 -> 578,644:
566,842 -> 14,290:
861,811 -> 861,174:
952,759 -> 172,759:
129,733 -> 129,821:
88,174 -> 877,963:
811,322 -> 767,366:
600,932 -> 544,988:
20,696 -> 407,696:
901,346 -> 901,267:
785,249 -> 785,602:
553,446 -> 553,541:
866,177 -> 206,837:
899,109 -> 19,989:
932,170 -> 149,953:
963,957 -> 258,957:
473,167 -> 355,49:
241,978 -> 241,333:
854,115 -> 77,892:
983,363 -> 289,363:
240,174 -> 520,454:
591,70 -> 591,139:
812,485 -> 319,485:
204,162 -> 204,121:
145,984 -> 959,170:
297,305 -> 297,968:
631,319 -> 631,56:
509,688 -> 509,829:
139,553 -> 139,458:
236,371 -> 237,372:
30,75 -> 149,75:
109,23 -> 109,325:
972,11 -> 20,963:
929,797 -> 882,750:
66,63 -> 845,842:
174,11 -> 174,104:
533,69 -> 533,199:
653,637 -> 653,584:
742,521 -> 473,790:
483,321 -> 464,302:
913,857 -> 95,39:
59,90 -> 835,866:
520,476 -> 520,50:
620,151 -> 421,350:
783,911 -> 783,817:
644,774 -> 740,774:
506,740 -> 506,751:
663,932 -> 536,805:
858,246 -> 128,976:
79,563 -> 372,563:
242,77 -> 672,77:
964,87 -> 374,677:
202,727 -> 644,285:
612,726 -> 612,724:
539,492 -> 611,492:
742,476 -> 929,476:
969,391 -> 925,435:
937,980 -> 119,162:
771,476 -> 771,581:
783,439 -> 875,439:
117,630 -> 600,147:
975,198 -> 244,929:
673,958 -> 673,326:
115,49 -> 984,918:
221,804 -> 639,386:
247,722 -> 70,722:
906,852 -> 92,38:
800,314 -> 115,314:
578,415 -> 578,431:
358,270 -> 358,410:
41,499 -> 41,877:
612,902 -> 612,612:
400,23 -> 315,23:
764,968 -> 764,723:
770,633 -> 770,229:
687,648 -> 687,531:
29,352 -> 29,473:
11,351 -> 944,351:
150,388 -> 150,434:
708,67 -> 866,67:
896,453 -> 594,755:
787,975 -> 63,251:
412,455 -> 198,455:
124,531 -> 124,420:
657,870 -> 470,870:
957,958 -> 36,37:
144,210 -> 756,822:
662,313 -> 271,313:
14,326 -> 636,948:
381,716 -> 381,24:
735,288 -> 735,788:
731,219 -> 731,881:
791,111 -> 303,111:
280,507 -> 333,454:
261,400 -> 600,400:
862,919 -> 862,560:
67,90 -> 827,850:
366,675 -> 581,675:
303,203 -> 303,479:
402,963 -> 402,347:
905,676 -> 905,60:
436,879 -> 100,879:
305,584 -> 322,584:
377,20 -> 221,20:
67,985 -> 959,93:
583,224 -> 583,197:
443,138 -> 786,138:
22,878 -> 889,11:
507,589 -> 56,589:
175,880 -> 947,108:
630,884 -> 630,786:
683,757 -> 848,757:
751,896 -> 54,199:
826,864 -> 826,339:
532,362 -> 532,648:
62,887 -> 62,841:
409,440 -> 409,501:
815,615 -> 272,615:
534,514 -> 534,43:
655,913 -> 878,913:
82,121 -> 270,121:
55,204 -> 84,175:
456,625 -> 383,552:
872,255 -> 872,497:
159,917 -> 837,239:
327,484 -> 193,484:
684,178 -> 789,178:
373,478 -> 117,222:
970,676 -> 970,65:
781,392 -> 781,413:
161,772 -> 177,772:
756,849 -> 373,849:
622,688 -> 622,839:
369,893 -> 369,353:
568,32 -> 568,219:
685,650 -> 685,428:
623,91 -> 981,449:
642,319 -> 642,747:
219,947 -> 715,451:
956,870 -> 770,870:
901,950 -> 219,268:
303,170 -> 303,486:
127,58 -> 861,792:
537,548 -> 537,569:
275,403 -> 275,112:
908,404 -> 735,404:
274,695 -> 239,730:
437,153 -> 437,436:
14,91 -> 909,986:
43,24 -> 949,930:
644,494 -> 324,494:
866,175 -> 556,485:
146,413 -> 146,341:
946,675 -> 661,960:
433,89 -> 751,407:
248,720 -> 248,377:
108,449 -> 845,449:
944,482 -> 944,59:
686,768 -> 686,861:
176,489 -> 176,586:
554,400 -> 554,412:
267,430 -> 268,430:
635,341 -> 635,977:
936,972 -> 22,58:
223,458 -> 223,39:
259,783 -> 259,788:
556,557 -> 556,443:
585,908 -> 61,384:
246,246 -> 594,594:
725,434 -> 43,434:
937,977 -> 937,303:
575,28 -> 191,28:
133,876 -> 133,459:
423,544 -> 501,544:
643,463 -> 563,463:
363,480 -> 12,831:
715,905 -> 458,905:
31,837 -> 264,604:
733,845 -> 733,220:
814,678 -> 719,678:
406,551 -> 735,551:
955,949 -> 37,31:
156,731 -> 749,138:
655,926 -> 646,926:
679,331 -> 679,718:
880,871 -> 204,195:
623,655 -> 779,655:
440,902 -> 550,902:
429,82 -> 491,82:
382,715 -> 382,342:
513,100 -> 513,514:
871,937 -> 16,82:
490,383 -> 442,383:
934,835 -> 157,58:
723,237 -> 373,587:
237,671 -> 237,130:
719,975 -> 365,975:
85,564 -> 352,564:
344,603 -> 583,603:
751,740 -> 751,847:
651,197 -> 660,197:
357,210 -> 745,598:
78,883 -> 883,78:
219,438 -> 714,933:
745,299 -> 268,299:
765,769 -> 878,769:
904,358 -> 315,358:
656,52 -> 145,563:
667,146 -> 693,146:
13,989 -> 984,18:
958,481 -> 958,936:
981,491 -> 519,29:
842,449 -> 337,449:
181,863 -> 29,863:
212,298 -> 212,21:
88,115 -> 920,947:
882,797 -> 882,966:
908,735 -> 908,910:
254,241 -> 348,335:
192,348 -> 192,364:
785,86 -> 662,209:
627,456 -> 911,740:
375,699 -> 375,897:
771,298 -> 98,971:
758,286 -> 735,286:
72,908 -> 72,189:
404,974 -> 545,833:
735,28 -> 48,28:
83,847 -> 476,847:
317,779 -> 811,285:
329,349 -> 990,349:
20,811 -> 816,811:
57,80 -> 906,929:
276,939 -> 276,98:
986,24 -> 24,986:
700,85 -> 700,111:
256,82 -> 900,82:
452,393 -> 195,393:
855,61 -> 187,729:
577,411 -> 577,852:
714,531 -> 714,698:
542,172 -> 549,172:
388,394 -> 164,170:
316,293 -> 331,308:
293,881 -> 293,981:
360,443 -> 720,803:
211,571 -> 656,126:
779,753 -> 636,896:
989,311 -> 337,963:
362,397 -> 362,716:
154,855 -> 154,91:
217,982 -> 217,942:
599,438 -> 599,399:
906,951 -> 906,146:
501,960 -> 457,960:
825,382 -> 13,382:
880,927 -> 874,927:
662,117 -> 662,428:
112,707 -> 659,160:
984,857 -> 356,229:
269,57 -> 269,220:
383,592 -> 916,592:
326,871 -> 982,871:
356,608 -> 826,608:
260,124 -> 260,128:
985,981 -> 15,11:
527,492 -> 470,492:
220,24 -> 520,324:
874,563 -> 562,251:
303,506 -> 737,940:
951,973 -> 69,91:
463,58 -> 127,394:
599,349 -> 599,528:
517,513 -> 654,513:
255,411 -> 255,325:
310,163 -> 582,435:
939,204 -> 939,466:
547,214 -> 490,214:
880,58 -> 880,442:
762,128 -> 549,128:
156,835 -> 556,835:
835,220 -> 717,220:
583,210 -> 583,117:
780,782 -> 250,252:
960,693 -> 781,872:
101,699 -> 665,699:
939,528 -> 939,106:
566,671 -> 512,671:
852,883 -> 852,871:
483,644 -> 835,644:
619,954 -> 401,736:
267,406 -> 133,406:
207,792 -> 748,251:
920,544 -> 41,544:
725,224 -> 290,659:
716,508 -> 903,321:
277,684 -> 444,517:
964,11 -> 15,960:
488,66 -> 488,118:
587,211 -> 587,728:
987,28 -> 780,28:
307,334 -> 717,334:
96,217 -> 96,680:
521,834 -> 519,834:
242,193 -> 78,357:
760,583 -> 909,434:
855,915 -> 894,876:
739,878 -> 782,835:
406,780 -> 375,780:
244,788 -> 244,512:
837,829 -> 454,446:
685,819 -> 709,819:
909,980 -> 198,269:
283,766 -> 283,11:
178,13 -> 178,473:
675,372 -> 675,366:
285,186 -> 285,329:
771,401 -> 351,821:
473,397 -> 473,719:
973,20 -> 10,983:
201,223 -> 750,223:
945,354 -> 312,987:
886,571 -> 847,571:
821,957 -> 821,545:
87,703 -> 660,130:
955,699 -> 733,477:
575,310 -> 523,310:
836,287 -> 836,948:
820,713 -> 536,713:
947,35 -> 947,308:
835,285 -> 835,186:
57,928 -> 927,58:
622,798 -> 622,745:
945,99 -> 624,99:
315,568 -> 315,853:
893,587 -> 893,540:
240,58 -> 240,84:
57,284 -> 57,521:
24,930 -> 818,136:
949,778 -> 949,829:
922,923 -> 25,26:
349,508 -> 349,46:
975,178 -> 65,178:
398,768 -> 534,768:
456,223 -> 948,715:
104,102 -> 104,42:
622,727 -> 622,702:
319,379 -> 319,443:
584,355 -> 584,151:
707,357 -> 707,80:
977,90 -> 302,90:
215,359 -> 215,670:
541,657 -> 407,657:
292,646 -> 292,163:
194,831 -> 909,831:
191,227 -> 134,227:
313,405 -> 651,405:
154,125 -> 154,467:
437,899 -> 895,899:
388,815 -> 388,444:
713,823 -> 713,131:
454,810 -> 381,810:
981,163 -> 981,909:
224,397 -> 759,932:
320,85 -> 681,85:
887,147 -> 844,190:
355,564 -> 355,386:
888,152 -> 716,324:
14,36 -> 846,868:
297,133 -> 679,133:
563,541 -> 563,45:
262,209 -> 967,914:
181,740 -> 181,651:
958,541 -> 624,875:
720,930 -> 720,572:
85,943 -> 347,943:
67,736 -> 855,736:
980,249 -> 412,249:
726,546 -> 726,679:
241,633 -> 241,843:
468,164 -> 468,590:
148,937 -> 870,215:
399,706 -> 127,706:
716,934 -> 59,934:
24,55 -> 679,710:
148,271 -> 148,709:
807,48 -> 940,48:
606,168 -> 606,643:
756,359 -> 521,594:
100,199 -> 37,136:
20,29 -> 980,989:
37,41 -> 255,41:
368,823 -> 302,823`


// input from task description
const input2 =`0,9 -> 5,9:
8,0 -> 0,8:
9,4 -> 3,4:
2,2 -> 2,1:
7,0 -> 7,4:
6,4 -> 2,0:
0,9 -> 2,9:
3,4 -> 1,4:
0,0 -> 8,8:
5,5 -> 8,2`

input = input.split(':\n')
	.map(elem => {
		elem = elem.split(' -> ')

		elem = elem.map(item => {
			item = item.split(',')
			item = item.map(item => +item)

			return item
		})

		return elem
	})
	


/** 
 * the resulting array to store the program data
 * @return { Array[] } res 
 */ 
let res = []


const findLines = (input) => {
	const arr = [...input]

	for (let i = 0; i < arr.length; i++) {
		const cur = arr[i]

		let obj = {
			x1: cur[0][0],
			y1: cur[0][1],
			x2: cur[1][0],
			y2: cur[1][1],
		}

		if (obj.x1 === obj.x2) {
			fillResX(obj.y1, obj.y2, obj.x1)
		}

		if (obj.y1 === obj.y2) {
			fillResY(obj.x1, obj.x2, obj.y1)
		}


		// PART 2 start
		
		// uncommit code below for solve part 2

		// if (obj.x1 === obj.y1 && obj.x2 === obj.y2) {
		// 	fillResXY(obj.x1, obj.y2)
		// }

		
		// else if (obj.x1 === obj.y2 && obj.x2 === obj.y1) {
		// 	fillResXY2(obj.x1, obj.y1)
		// }

		// else if (obj.x1 - obj.y1 === obj.x2 - obj.y2) {
		// 	fillResXY3(obj.x1, obj.x2, obj.y1, obj.y2)
		// }

		// else if (obj.x1 + obj.y1 === obj.x2 + obj.y2) {
		// 	fillResXY4(obj.x1, obj.x2, obj.y1, obj.y2)
		// }

		// PART 2 end
	}

	countLines()
}

const fillResXY = (p1, p2) => {

	let min = Math.min(p1, p2)
	let max = Math.max(p1, p2)

	while (min <= max) {
		if (!Array.isArray(res[min])) res[min] = []

		if (res[min][min]) {
			res[min][min] += 1
		} else {
			res[min][min] = 1
		}

		min++
	}
}

const fillResXY2 = (p1, p2) => {

	let min = Math.min(p1, p2)
	let max = Math.max(p1, p2)

  let i = min
  let j = max
	
	while (i <= max) {
		if (!Array.isArray(res[i])) res[i] = []

		if (res[i][j]) {
			res[i][j] += 1
		} else {
			res[i][j] = 1
		}

		i++
    j--
	}
}

const fillResXY3 = (x1, x2, y1, y2) => {
	let minX = Math.min(x1, x2)
	let maxX = Math.max(x1, x2)
	let maxY = Math.max(y1, y2)
	
	while (maxX >= minX) {
		if (!Array.isArray(res[maxY])) res[maxY] = []
		if (res[maxY][maxX]) {
			res[maxY][maxX] += 1
		} else {
			res[maxY][maxX] = 1
		}

		maxX--
    maxY--
	}
}

const fillResXY4 = (x1, x2, y1, y2) => {
	let minX = Math.min(x1, x2)
	let minY = Math.min(y1, y2)
	let maxY = Math.max(y1, y2)
	
	while (maxY >= minY) {
		if (!Array.isArray(res[maxY])) res[maxY] = []

		if (res[maxY][minX]) {
			res[maxY][minX] += 1
		} else {
			res[maxY][minX] = 1
		}

		minX++
    maxY--
	}
}

const fillResY = (p1, p2, axis) => {

	let min = Math.min(p1, p2)
	let max = Math.max(p1, p2)
	
	if (!Array.isArray(res[axis])) res[axis] = []

	while (min <= max) {
		if (res[axis][min]) {
			res[axis][min] += 1
		} else {
			res[axis][min] = 1
		}

		min++
	}
}

const fillResX = (p1, p2, axis) => {

	let min = Math.min(p1, p2)
	let max = Math.max(p1, p2)
	
	while (min <= max) {
		if (!Array.isArray(res[min])) res[min] = []

		if (res[min][axis]) {
			res[min][axis] += 1
		} else {
			res[min][axis] = 1
		}

		min++
	}
}


const countLines = () => {
	let count = 0

	let result = []

	res.forEach((elem, idx) => {
		result[idx] = elem.filter(el => el > 1)
	})

	result = result.filter(el => el.length)
	count = result.map(el => el.length).reduce((acc, el) => acc + el)

	console.log('COUNT: ', count) // result

	return count
}


findLines(input)
