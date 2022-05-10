import { dataMapper } from "../dataMapper"

export const promoController = {
	async promosList(_, res) {
		try {
			const promos = await dataMapper.promoList()
			res.render("promos", { promos })
		} catch (err) {
			res.status(500).send(err)
		}
	},

	async promoPage(req, res) {
		try {
			const promoId = await dataMapper.promoPage(+req.params.id)
			res.render("promo", {
				promoId: promoId,
			})
		} catch (err) {
			res.status(500).send(err)
		}
	},

	async studentsPage(req, res) {
		try {
			const promoId = await dataMapper.promoPage(+req.params.id)
			const promo = await dataMapper.studentsPage(+req.params.id)
			res.render("students", {
				promoId: promoId,
				promo: promo,
			})
		} catch (err) {
			res.status(500).send(err)
		}
	},

	async studentPage(req, res) {
		try {
			const promoId = await dataMapper.promoPage(+req.params.id)
			const student = await dataMapper.studentPage(+req.params.student)
			res.render("student", {
				promoId: promoId,
				student: student,
			})
		} catch (err) {
			res.status(500).send(err)
		}
	},
}
