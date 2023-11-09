// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
  <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
    <FormControl sx={{ width: { xs: '100%', md: 400 } }}>
      <OutlinedInput  sx={{'& fieldset': { borderColor: '#0C6635',  },}}
        size="small"
        id="header-search"
        endAdornment={
          <InputAdornment position="end" sx={{ mr: -0.5 }}>
            <SearchOutlined />
          </InputAdornment>
        }

        aria-describedby="header-search-text"
        inputProps={{
          'aria-label': 'weight'
        }}
        placeholder="Rechercher un medicament"
      />
    </FormControl>
  </Box>
);

export default Search;
