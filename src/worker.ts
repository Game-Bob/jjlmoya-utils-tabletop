interface UtilityMfeEnvironment {
    ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
    fetch(request: Request, environment: UtilityMfeEnvironment): Promise<Response> {
        return environment.ASSETS.fetch(request);
    },
};
