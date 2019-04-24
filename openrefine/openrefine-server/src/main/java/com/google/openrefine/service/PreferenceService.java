package com.google.openrefine.service;

import com.google.openrefine.domain.Preference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PreferenceService {
    private final Logger log = LoggerFactory.getLogger(PreferenceService.class);

    public List<Preference> findAll() {
        Preference pref1 = new Preference("size", "100");
        Preference pref2 = new Preference("width", "10");
        Preference pref3 = new Preference("test", "10666");
        List<Preference> prefs = new ArrayList<>();
        prefs.add(pref1);
        prefs.add(pref2);
        prefs.add(pref3);
        return prefs;
    }

    public Preference createPreference(Preference preference) {

        return null;
    }
}
