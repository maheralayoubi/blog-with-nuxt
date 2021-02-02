export { default as PostPreview } from '../../components/Blog/PostPreview.vue'
export { default as TheHeader } from '../../components/PageHeader/TheHeader.vue'

export const LazyPostPreview = import('../../components/Blog/PostPreview.vue' /* webpackChunkName: "components/post-preview" */).then(c => c.default || c)
export const LazyTheHeader = import('../../components/PageHeader/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => c.default || c)
