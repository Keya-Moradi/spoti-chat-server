const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const { User, Chat, Friend, Favorite } = require('../models');

const userId = '6587314c0e29b38d86c8ae39';
let friendId;

describe('Friends Controller', function () {
	describe('GET all friends', function () {
		it('should return a 200 response', function (done) {
			request(app).get(`/friends/${userId}`).expect(200, done);
		});
	});

	describe('POST /friends/:id/add', function () {
		const newFriend = {
			userId: '6599951580b597a238461f1a',
		};
		it('should return a 200 response on success', function (done) {
			request(app)
				.post(`/friends/${userId}/add`)
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.send(newFriend)
				.expect(200, done);
		});

		it('should return a 409 response because you cannot add yourself as a friend', function (done) {
			request(app)
				.post(`/friends/${userId}/add`)
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.send({ userId: userId })
				.expect(409, done);
		});

		it('should return a 409 response if friend already exists', function (done) {
			request(app)
				.post(`/friends/${userId}/add`)
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.send(newFriend)
				.expect(409, done);
		});
	});

	describe('DELETE /:id', () => {
		// Create a test user before the tests
		before(async () => {
			const newFavorite = new Favorite({
				type: 'track',
				spotifyId: '63irPUP3xB74fHdw1Aw9zR', // get from API link
				name: 'MANIAC',
				imgUrl:
					'https://i.scdn.co/image/ab67616d0000b2733613e1e0d35867a0814005a9',
				albumName: 'MANIAC',
				artistName: 'Stray Kids',
				isFavorited: true,
			});

			const savedFavorite = await newFavorite.save();
			friendId = savedFavorite._id;
		});

		it('finds a favorite by id and deletes', async () => {
			try {
				const response = await request(app).delete(
					`/friends/${friendId}/unfriend`
				);

				expect(response.status).to.equal(200);
			} catch (error) {
				console.error('Test error:', error);
				throw error;
			}
		});
	});
});
