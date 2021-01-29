export default function ({ store, error, redirect }) {
  if (store.state.user == null) {
    error({ statusCode: 403, message: "403 Forbidden" });
    redirect("/login");
  }
}
