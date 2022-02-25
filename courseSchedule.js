/*
  We create two different hash tables to
  store the course prerequisites array
  and course visited information. After
  going through prerequisites array and
  storing information to our coursePre
  hash table we start depth first search
  on each item in coursePre hash table.
*/

function canFinish(numCourses, prerequisites) {
  const coursePre = {};
  const visited = {};
  for (let pre of prerequisites) {
    if (coursePre[pre[0]]) {
      coursePre[pre[0]].push(pre[1])
    } else {
      coursePre[pre[0]] = [pre[1]];
    }
  }
  function dfs(course) {
    if (visited[course]) return false;
    if (!coursePre[course] || !coursePre[course].length) return true;
    visited[course] = true;
    for (let prerequisite of coursePre[course]) {
      if (!dfs(prerequisite)) return false;
    }
    visited[course] = false;
    coursePre[course] = [];
    return true;
  }
  for (let course in coursePre) {
    if (!dfs(course)) return false;
  }
  return true;
}