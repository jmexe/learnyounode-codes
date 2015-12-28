ans = 0
for (index = 2; index < process.argv.length; index++) {
	ans += Number(process.argv[index]);
}

console.log(ans)
