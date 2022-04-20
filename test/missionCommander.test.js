const MissionCommander = require('./../app/missionCommander');


describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const Gabriel = new MissionCommander("Gabriel")
        const Equipo = new MissionCommander("Bayern")
        const Auto = new MissionCommander("Ferrari") 
      expect(Gabriel.name).toBe("Gabriel");
      expect(Equipo.name).toBe("Bayern");
      expect(Auto.name).toBe("Ferrari");
    });
  })
  