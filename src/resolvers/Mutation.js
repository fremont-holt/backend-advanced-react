const Mutations = {
  // async await to make sure that item is created in db before returning
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  }
  // createDog(parent, args, ctx, info) {
  //   console.log(args);
  // }
};

module.exports = Mutations;
