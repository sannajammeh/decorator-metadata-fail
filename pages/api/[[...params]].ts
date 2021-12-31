import { createHandler, Get, Param } from "@storyofams/next-api-decorators";

class HelloHandler {
  @Get("/:thisDoesNotWork")
  // This fails due to library looking for Reflect.getMetadata("design:paramtypes", ...).
  // Design:paramtypes is never emitted due to missing SWC flag.
  async get(@Param("thisDoesNotWork") thisDoesNotWork: string) {
    return {
      thisDoesNotWork,
    };
  }
}

export default createHandler(HelloHandler);
