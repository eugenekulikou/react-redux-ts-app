import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../actions-types'
import { Action } from '../actions'

export const searchRepos = (query: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: query
        }
      });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })

    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
}