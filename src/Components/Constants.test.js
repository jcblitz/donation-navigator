import Constants from './Constants';

test('API URL is set', () => {
    expect(Constants.api.campaign.index()).toBeTruthy();
});

test('all results should be at the index', () => {
    expect(Constants.api.campaign.index()).toEqual("http://localhost:8000/campaigns")
})