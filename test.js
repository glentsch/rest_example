import {getAllUsers, getUserByUsername} from "./index"

describe("User tests", () => {
    it("Get all Users", async () => {
        const users = await getAllUsers();
        expect(users).toEqual([{"username": "glentsch"}, {"username": "hockpuck"}]);
    });
    it("Get specific user", async () =>> {
        const user = await getUserByUsername("glentsch");
        expect(user).toEqual({"username": "glentsch"})
    })
}); 