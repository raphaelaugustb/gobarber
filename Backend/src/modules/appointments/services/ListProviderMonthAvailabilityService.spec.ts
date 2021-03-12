import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRespository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRespository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRespository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 9, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 11, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 12, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 13, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 16, 0, 0),
    });
    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 20, 17, 0, 0),
    });

    await fakeAppointmentsRespository.create({
      provider_id: 'user',
      user_id: 'user2',
      date: new Date(2020, 4, 21, 11, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 20, available: false },
        { day: 21, available: true },
      ]),
    );
  });
});
