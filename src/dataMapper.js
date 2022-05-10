import client from "./database"

export const dataMapper = {
	async getArray(...args) {
		try {
			return (await client.query(...args)).rows
		} catch (err) {
			console.log(err.message)
			throw err
		}
	},

	async getRow(...args) {
		try {
			return (await this.getArray(...args))[0]
		} catch (err) {
			console.log(err.message)
			throw err
		}
	},

	async dbInsert(query, values) {
		await client.query(query, values)
	},

	async promoList() {
		return await dataMapper.getArray("SELECT * FROM promo")
	},

	async promoPage(param) {
		return await dataMapper.getRow(`SELECT * FROM promo WHERE id = $1`, [param])
	},

	async studentsPage(param) {
		return await dataMapper.getArray(
			`SELECT * FROM student WHERE promo_id = $1`,
			[param]
		)
	},

	async studentPage(param) {
		return await dataMapper.getRow(`SELECT * FROM student WHERE id = $1`, [
			param,
		])
	},
	async addStudent(first_name, last_name, github_username, promo) {
		await dataMapper.dbInsert(
			"INSERT INTO student (first_name, last_name, github_username, profile_picture_url, promo_id) VALUES ($1, $2, $3, $4, $5)",
			[
				first_name,
				last_name,
				github_username,
				"https://cdn.fakercloud.com/avatars/baires_128.jpg",
				promo,
			]
		)
	},
}
