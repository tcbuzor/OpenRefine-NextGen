package com.google.openrefine.web.rest;

import com.google.openrefine.domain.Preference;
import com.google.openrefine.service.PreferenceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PreferenceResource {

    private final Logger log = LoggerFactory.getLogger(PreferenceResource.class);

    private PreferenceService preferenceService;

    public PreferenceResource(PreferenceService preferenceService){
        this.preferenceService = preferenceService;
    }

    @GetMapping("/preferences")
    public List<Preference> getAllPreferences() {

        log.debug("REST request to get all Preferences");
        return preferenceService.findAll();
    }

    @PostMapping("/preferences")
    public ResponseEntity<Preference> createPreference(@Valid @RequestBody Preference preference) throws URISyntaxException {
        log.debug("REST request to save Preference : {}", preference);
        Preference newPreference = preferenceService.createPreference(preference);
        return ResponseEntity.created(new URI("/api/preferences/" + ""))
                .body(newPreference);

    }
}
