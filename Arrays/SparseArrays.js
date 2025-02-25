let stringList = ["ab", "ab", "abc"];
let queries = ["ab", "abc", "bc"];

function matchingStrings(stringList, queries) {
  let answer = [];
  for (let i = 0; i <= queries.length - 1; i++) {
    answer.push(stringList.filter((x) => x === queries[i]).length);
  }
  return answer;
}

matchingStrings(stringList, queries);
