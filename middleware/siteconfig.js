

export default async function (context){
//Grab the siteconfig stories
  if (context.store.state.siteconfigs.loaded ==='0') {
    let configsRefRes = await context.app.$storyapi.get(`cdn/stories/`, {
      starts_with: "siteconfigs/",
      version: "draft",
    });
    context.store.commit("siteconfigs/setConfigs", configsRefRes.data.stories);
    context.store.commit("siteconfigs/setLoaded", "1");
  // console.log(context.store.state.siteconfigs);

  }

};
