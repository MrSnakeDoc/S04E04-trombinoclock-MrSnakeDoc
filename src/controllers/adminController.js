import { dataMapper } from "../dataMapper.js"

export const adminController = {
	async addStudent(_, res) {
		try {
			const promos = await dataMapper.promoList()
			res.render("addStudent", { promos })
		} catch (error) {
			console.log(error)
		}
	},
	async adminResult(req, res) {
		try {
			await dataMapper.addStudent(
				req.body.first_name,
				req.body.last_name,
				req.body.github_username,
				req.body.promo
			)
			res.redirect(`/promo/${+req.body.promo}/students`)
		} catch (err) {
			res.status(500).send(err)
		}
	},
}
