// --- Day 4: Giant Squid ---
// You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.

// Maybe it wants to play bingo?

// Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)

// The submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:

// 7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

// 22 13 17 11  0
//  8  2 23  4 24
// 21  9 14 16  7
//  6 10  3 18  5
//  1 12 20 15 19

//  3 15  0  2 22
//  9 18 13 17  5
// 19  8  7 25 23
// 20 11 10 24  4
// 14 21 16 12  6

// 14 21 17 24  4
// 10 16 15  9 19
// 18  8 23 26 20
// 22 11 13  6  5
//  2  0 12  3  7
// After the first five numbers are drawn (7, 4, 9, 5, and 11), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):

// 22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
//  8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
// 21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
//  6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
//  1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
// After the next six numbers are drawn (17, 23, 2, 0, 14, and 21), there are still no winners:

// 22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
//  8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
// 21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
//  6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
//  1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
// Finally, 24 is drawn:

// 22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
//  8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
// 21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
//  6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
//  1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
// At this point, the third board wins because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: 14 21 17 24 4).

// The score of the winning board can now be calculated. Start by finding the sum of all unmarked numbers on that board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.

// To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?

// Your puzzle answer was 34506.

// --- Part Two ---
// On the other hand, it might be wise to try a different strategy: let the giant squid win.

// You aren't sure how many bingo boards a giant squid could play at once, so rather than waste time counting its arms, the safe thing to do is to figure out which board will win last and choose that one. That way, no matter which boards it picks, it will win for sure.

// In the above example, the second board is the last to win, which happens after 13 is eventually called and its middle column is completely marked. If you were to keep playing until this point, the second board would have a sum of unmarked numbers equal to 148 for a final score of 148 * 13 = 1924.

// Figure out which board will win last. Once it wins, what would its final score be?

// Your puzzle answer was 7686.

// Both parts of this puzzle are complete! They provide two gold stars: **




// INPUT
const nums = [
  '37', '60', '87', '13', '34', '72', '45', '49', '61', '27',
  '97', '88', '50', '30', '76', '40', '63', '9',  '38', '67',
  '82', '6',  '59', '90', '99', '54', '11', '66', '98', '23',
  '64', '14', '18', '4',  '10', '89', '46', '32', '19', '5',
  '1',  '53', '25', '96', '2',  '12', '86', '58', '41', '68',
  '95', '8',  '7',  '3',  '85', '70', '35', '55', '77', '44',
  '36', '51', '15', '52', '56', '57', '91', '16', '71', '92',
  '84', '17', '33', '29', '47', '75', '80', '39', '83', '74',
  '73', '65', '78', '69', '21', '42', '31', '93', '22', '62',
  '24', '48', '81', '0',  '26', '43', '20', '28', '94', '79'
]

let b = `66 78  7 45 92
39 38 62 81 77
 9 73 25 97 99
87 80 19  1 71
85 35 52 26 68
,,,
47 38 84 53 16
66  3 63 92 94
71 41 59  1 87
17 67 62 73 33
69 12 26 82 55
,,,
89 94 65 57  6
27 77 60 19 83
72 58  0 29 91
33 75 50 64 87
24 88 32 93 38
,,,
35 82  7 49 43
58  8 56 54  6
74 53 98 59 84
 4 40 11 67 14
89  1 44 51 45
,,,
44 51 57 75 19
33 54 24 96  1
30  0 45 47 38
58 78 17 74 14
91 60 32 67 10
,,,
72 91 61 45 49
68 67 31 69 96
92 52  9 34 36
16 77 62 55 41
42 88 53  4 15
,,,
68 98 73 81 41
36 43 87 48 95
55 62  8 12 30
23 34 59 72 85
38  7 16 13 79
,,,
66 98 23 69 89
71 84 79 14 53
10 62 60 44 28
49 43 29 45 75
72 94  5 64  3
,,,
27 99 41 10 91
 2 94 16 85 75
25 95 15 34 36
90 72 76 20 29
55 18 93 53 69
,,,
84 87 16 80 64
48 45 63 53 25
10 44 65 58 59
94 31 41 35 89
42 29 71 69 61
,,,
63 44 74 33  3
65 47 90 52 38
 9 13 91  4 45
26 39 94 68 93
56 31 41 59 32
,,,
17  6 85 74 19
58 93  9 92 31
90 69  2 87 11
67 94 53 66 30
15 41 59 51 45
,,,
 7 59 76 14 15
51  3 88 17  2
42 39 98 84 65
54 48  9 56 74
68  5  1 24 13
,,,
55 34 94 50 28
 8 14 93 64 52
92 62  9 51 38
31 74 73 24 59
33 65  7 75 32
,,,
30 93 48 17 33
67  7  5  0 69
54 76 52  1 87
99 73 50 25 16
13 20 41 77 62
,,,
54  0 33 23 75
50  4 29 18 94
14  8 38 48 53
84 13 12 91 83
69 78 55 47 26
,,,
30 65 70 51  1
22 53 86 46 89
99 79 20 24 64
18 92 82  0 68
57 33 61 12 83
,,,
22 47 21 38 57
41 63 61 95 79
 7 52 87 71 14
40 45 92 73 48
42  0 26 94  5
,,,
90 98 47 85 52
19 44 48 59 88
93 81  7 16 63
 1 45 84 11 24
78 27 62 77 37
,,,
34  2  6  3 56
48 47 12 58 76
89 78 30 75 20
91 39 97 69 28
96 64 32 61 67
,,,
62 25 53 56 97
42 34 24 64 95
17 35  7 79 68
30 74 54 78  3
88 66 18 38 90
,,,
63 45 80 89 76
39 57 71 25 79
 6  3 28 94 34
82 18 95 42 33
96 36 27 83 66
,,,
20 87 59 86 21
14 61  7 23 56
 5 33 91  0  1
97 65 82 95 72
18 26 35 47 69
,,,
86 65 41 97 40
 2 73 68 34  3
88 71 79 70 95
48 62  1 50 77
13 67 20 15 55
,,,
98 16 93 30 24
39 11 56 13  3
14 83 76 58 60
73 81 63 88 92
74 96 51 43 77
,,,
 4 12 43 46 53
34 37 50 60 56
96 98 10 65 38
40 24 80 77 73
23 67 84 64 13
,,,
 5 19 85  1 58
41 15 44 57 22
 2 66 80 94 71
40 55 89 79  0
56 81 23 30 24
,,,
 0 29 94  4 68
81  2 20 95 43
49 40 37 30 96
19 23 42 26 85
61 17 12 72 88
,,,
64 26 61 32 68
80 24 31 67 49
72 15 88 98 50
73 55 86 38 10
87 34 52 29 63
,,,
76 61 36 54 10
63 56 75 67 29
11  9 41  4 43
83 88 45 93 74
72 70 94 60 98
,,,
44 99 39  5 23
53 69 68 60 83
81 72  1 97 20
43 96 91 11 32
51  7  8 86 25
,,,
62 36 39 20  5
52 59  6 74 95
 2 83 44 43 66
96 55 79 42 37
34 32 19  0 90
,,,
84  8 65 35 78
57 83  4 82 36
 3 29 74 60 90
86 47 53 26 10
52 51 40 32  6
,,,
69 32 77 72 44
34 54 82 94 23
 1 60  2 11 36
17 52  0 73 31
 5 90 24 21 53
,,,
42 24 18 44  5
74 19 76 62 34
61 66  4 77 47
92 94 78 39 97
25 91 11 22 23
,,,
11 87 83 93  8
 7 73 85 84  3
65 16 71 12 44
88 61 54 19 97
72 57 80 59 45
,,,
30 55  1 62 39
31 45 34  6 43
68 93 38 57 60
70 32  5 95 92
35 83 66 36 91
,,,
76 89 54 36 21
99 28 62 78 73
17 72 96 13 91
79 65 37 81 14
33 86 31 11 25
,,,
 3 93 37 88 47
 4  6 19 87 30
76 22 33 69 64
36 52 60 82 53
39  5 61 67 90
,,,
28  6 59 61 75
40  4 65 43 93
41 32 60 89 18
22 11 12  9  0
26 15 78 90 30
,,,
 8 87 74 70 76
45 43 63 84 25
18 68 92  4 31
66 22 29 71 91
15 50 64 52  1
,,,
 3 93 25 71 43
45 48 52  4 94
36 34 47 74 97
12 27 64 14 80
41 17 21 32 88
,,,
76 62 68 24  0
97 43 37  3 79
65 25 52 28 20
29 18 90 89 48
35 66 19 53 82
,,,
57 98 86 69 24
55 74 49 12 35
68 50 70 38 75
82 56 73  5 89
90 10 15 14 95
,,,
98 86 47 87 81
62 51  3 79 10
60 39 61  9 77
36 50 89 49 88
63 95  1 15 69
,,,
72 71 51 33 23
12 35 97 34 99
 4 32 36 88 80
 5 17  3 56  1
44 19 47 98 26
,,,
55 56 75  5 74
 4 86 60 67 68
21 45 40 17  2
43 39 20 88 33
24 70 58 13 98
,,,
34 28 86 65 80
82 23 98 91  0
61 62 43 51 49
39 10 58  1 11
 8 83 17 97 31
,,,
 7 96  2 18 26
15 86 34 76 61
75 93 68  3 83
63 37 85  8 74
11 51 32 14 23
,,,
25 33 24 86 75
63 73 97 37 47
76 72 34 81 27
93 91 70 20 98
11 94 64 28  6
,,,
70 86 59 78 95
47 18 64 40 68
49 55 20 12 53
60 76 35 83 50
32 73 91 46 28
,,,
31 21 92 97 89
14 82 51  1 62
43 58 90 18 24
56 79 54 35 48
29 39 45 86 66
,,,
62 74 81 27 23
28 92 66 86 29
98 95 14 35 11
13 69 70 64 79
51 80 87 96 85
,,,
69 15 37 95 29
 6 45 20 17 36
62 42  1 77 59
25 44 72 35 31
70 73 86 89 97
,,,
81 88 82 99 13
53 87  2 29 47
36 94 48 95 65
96 42 92 61 60
86 33 83 52 12
,,,
32  4 52 54 24
28 77 58 80 16
62 82 59  6 66
63 72 91 41 29
36 22 68  0 31
,,,
38 58 51 77 26
80  5 90 30 20
33 14 54 53  0
76 74 63 84 15
45 73 41 29 69
,,,
28 31 47 97 58
69  7 86 40 57
45  1 11 84 54
29  9 95 93 88
12  5 79 76 77
,,,
93  7 60 75 12
49 64 20 46 10
 3 23 76 42 47
 9 22  6 34 87
41 37 66 45 48
,,,
 9 53 64 37 83
89 43 91 30 36
39 22 69 79 42
31 28 55 40 54
 7 24 44 84 46
,,,
81 75 15 89 31
11 13 12  5 10
94 80 22 68  3
27 60 42 65 58
40 82 17 92 73
,,,
16 40 98 33 41
79 72  2 77 86
14 32 85 74 50
11 49 62 56  9
69 20 12 19 60
,,,
95 72 61 54 92
10  0  1 84 99
88 62 13 18 86
89 59 60 29 78
55 98 27 91 87
,,,
58 37 49 43 76
14  3 65 13  2
92 20  6 73  5
96 53 82 95 99
15 83 80 26 11
,,,
51 71 56 58 95
59 84 46 54 94
 8  7 49 62 83
47 92 32 31 65
48 44 57 25 20
,,,
 5  3 26 90 14
61 16 44  4  0
49  1 52 82 54
60 77 86 43 87
 6 36 73 25 31
,,,
32 25 37 18 63
60 65 35 24 34
52 94 12 77 47
99 83  2 30 74
58 38 17 75 56
,,,
77 88 70 22 39
 4 14 86 99 50
 5 79  2 78 16
34 46 83 58 13
71 74 21 76 66
,,,
25 15 99 79 68
59 95 82 22 53
 0 70 85 73 67
36 10 66  6 32
 1 51 52 40  4
,,,
29 49 64 26 18
56 28  9  7 99
20  2 74 71 39
81 94 55 75 16
52 45 35 66 11
,,,
42 68 76 37 34
 0 41 86 19 59
 7 46 49 30 88
74 80 24 50 29
96 78 67 61 26
,,,
45 96 11 99 44
87 95 32 77 64
 8 31 80  4 34
24 91 90 16 60
13 29 63 67 59
,,,
15 55  0 52 54
58 45 62 66 85
91 19 32 16 92
93 59  8 22  2
98 33 31 17 84
,,,
28 49 63 81 69
30 45 46 90 26
 4 76 94 93 24
15 16 18 86 62
 2 98 89 44 67
,,,
32 35 11  1 38
86 36 70 24 95
59 94 71 99 40
48 64 91 25 57
29 76 68 88 58
,,,
45 81 50 20 68
85 91 49 38  9
27  0 58  8 10
59  1 88 19 89
23 29 61 99 12
,,,
74 50 41 83  4
33 34 88 23 14
89 39 98 75 37
26 73 80 71 44
52 53 48 84 85
,,,
47 35 98 73  9
61  4 71 91 58
65 40 63 36 86
12 30 69 46  2
 6 17 23 32 74
,,,
84 87 59 58 65
30 53  7 98 48
71 28  1 77 56
36 88 52 64 89
90 37 94 26 39
,,,
25 75 32 48  6
49  7 74 50 62
68 51 72 12 10
94 37 97 69 91
73  9 67 18  1
,,,
51 96 71 44  0
97 52  1 77 11
90  9 15 76 24
68  6 57 40 98
47 31 94 82 49
,,,
48 31 26 77 14
94 93 27  2 82
11 83 85  9  8
90 69  4 16 22
 5 62 29 57 30
,,,
59 46 82 13 53
71 58 67  2 28
73 52 30 97 12
95 34 51 32 38
62 81  5 15 74
,,,
82 10 58 84 67
92  5 66 25 83
90 76 21 26 69
39 63 42 11 53
23 61 80 99 48
,,,
 8 13 49 63 83
26 48 50 53 43
 1 39 95 60 99
96  7 35 94 10
24 44 65 31 46
,,,
87 17 72 71 81
35 56  4 99 59
96 90 37 23 86
34 73 18 19 78
41 10 43 92 80
,,,
29  7 37 40 70
72 10 85 74 76
36  9 13 73 82
 4 65 49 77 42
75 24 84 78 39
,,,
29  6 94 59 38
99 55  8 66 85
14 43 25 92 67
49 33 87 39 44
 9 61 24 90 75
,,,
45 35 78 56 24
53 38 34 92 55
20 44 90 33 83
54 95 71 87 13
40 43 85 88 68
,,,
32 80 59 34 22
18  9 12 15 55
85 60 37 64 92
35 39 26 90 50
52 67 58 87  8
,,,
90 96 40 14 61
34 33 80 22 38
59 94  3  6  4
 0 71 25  1 20
30 57 48 31 10
,,,
50 14 40 48 83
85 80 29 60  2
92 59 86 99 57
46  7 89 66 75
98  6 45 97 51
,,,
13 17  0 57  5
29 68 52 11 59
78 63 94 88 89
35 54 74 18  2
28 65 86  1 30
,,,
57 46 44 86 62
43 89 81 34 13
32 51  9  6 35
29 52 84  8 88
26 21 17 75 85
,,,
14 87 26 22 30
65 78 98  6 60
42 99 19 71 11
68 27 48 52 62
51  1 54 37 74
,,,
76 69 37 49 61
20 91 14 31 11
54 40 67 71 15
73 64 85 80 62
 5 10  3 51  7
,,,
63 90 54 46 17
16  5  4 56 33
39 41  8 87 80
14 77 26 47 70
15 48  6 10 76
,,,
96 95  0 42 56
 3 87 92 18 60
51  7 38  4 91
41 33 80 43 66
61 32 57 84 10
,,,
 8 64 76 78 17
55 74 68 47 29
46 84 49 58 93
52 26 32 11 33
24 42 98 27 43
,,,
14 19 27 93 16
23 32 74 73 67
68 38  2 22 76
 6 12 94 15 77
64 62 34  3 37`

b = b.split(',,,\n')

let arr = b.map((el, i) => {
  return el.split('\n').map((row, j) => {
    return row.split('\n').map((item, k) => {
      let it = item && item.split(' ').filter(el => el)
      return it
    })
  })
})

arr = arr.map(el => {
  el.length = 5
  return el
})

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].map(a => {
    return a.flat()
  })
}

// SOLUTIONS:
// part 1 and part 2
const obj = {
  unCheckedList: [],
  win: null,

  check: function (item) {
    if (this[item]) {
      return this.addToCheckedList(item)
    }
  },

  addToCheckedList: function(item) {
    this[item].checked = true

    const { y, x } =this[item]

    if (this[`y${y}`]) {
      this[`y${y}`] += 1
    } else {
      this[`y${y}`] = 1
    }
    if (this[`x${x}`]) {
      this[`x${x}`] += 1
    } else {
      this[`x${x}`] = 1
    }

    this.unCheckedList = this.unCheckedList.filter(el => el !== item)

    return this.isWin(`y${y}`, `x${x}`, item)
  },

  sum: function(nums) {
    return nums.reduce((acc, num) => acc + +num, 0)
  },

  isWin: function (x, y, item) {
    if (this[x] >= this.len || this[y] >= this.len) {
      this.win = { id: this.id, num: item, result: +item * this.sum(this.unCheckedList) }

      return this.win
    }

    return false
  }
}

const createObj = (board, obj, id) => {
  const o = { ...obj }
  const unCheckedList = []

  board.forEach((elem, idx) => {
    for (let j = 0; j < elem.length; j++) {
      o[elem[j]] = { y: idx, x: j,  checked: false }
      unCheckedList.push(elem[j])
    }
  })

  o.id = id
  o.len = board[0].length
  o.unCheckedList = [...unCheckedList]

  return o
}

const arrOfObj = arr.map((elem, idx) => {
  return createObj(elem, obj, idx + 1)
})

const bingo = (nums, arrObj) => {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    for (let j = 0; j < arrObj.length; ) {
      const board = arrObj[j]

      if (board.check(num)) {
        const res = board.check(num)
        const id = res.id
        const boardId = board.id

        arrObj = arrObj.filter(obj => obj.id !== board.id)

        console.log('WE ARE THE CHAMPIONS!!!', res) // 1st log is answer to the part1 last one is for the part2
        continue
      } else {
        j++
      }
    }
  }
}
